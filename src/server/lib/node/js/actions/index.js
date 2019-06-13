import {resolveconditions} from '../utils';

const NODE_UPDATE_VALUE       = 'iot.red/nodes/NODE_UPDATE_VALUE';
const NODE_UPDATE_SCHEMA      = 'iot.red/nodes/NODE_UPDATE_SCHEMA';
const NODE_UPDATE_DESCRIPTION = 'iot.red/nodes/NODE_UPDATE_DESCRIPTION';
const NODE_CONFIGURE_OK       = 'iot.red/nodes/NODE_CONFIGURE_OK';
const NODE_CONFIGURE_CANCEL   = 'iot.red/nodes/NODE_CONFIGURE_CANCEL';

const _leaf= (id, links)=>{
  const item = links.find((item)=>{
    return item.split(":")[1] === id;
  });
  return item ? false : true;
}

const _children=(id, links, seen={})=>{
  
  if (seen[[id, ...links].join()]){
    return [id];
  }

  if (_leaf(id,links)){
    return [id];
  }

  seen[[id, ...links].join()] = true;

  return [id, ...links.filter((l)=>_from(l) === id).map(link=>[].concat(..._children(_to(link), links, seen)))];
}

const _from =(link)=>{
  return link.split(":")[1]
} 

const _to =(link)=>{
  return link.split(":")[2]
}

const _downstreamnodes =(id, links)=>{
  return [].concat(..._children(id, links)).filter(i=>i !== id);
}

const _updatedownstream = (id, dispatch, getState)=>{
 
  const links = getState().ports["links"];
  const downstream = _downstreamnodes(id,links);

  downstream.forEach((n)=>{

    const nodes = getState().nodes.nodesById;
    const node = nodes[n];


    const inputs = links.filter((key)=>{
            return _to(key) === n;
        }).map((linkId)=>{
          const {id, schema} = nodes[_from(linkId)];
          return {id,schema};
        });

    if (node){ 
      
      //NB: if a node has inputs then we need to calculate whether certain items of presonal data emerge as a result of the 
      //fusion of the inputs.  We must first get the schema resulting from whatever the node does to the data, then check to see
      //if there are any additional conditions that are satisifed and so lead to new data items (for example, if one input has a subtype "gender")
      //and another input has a condition that relies on "gender" then resolveconditions will find it, assuming that the node combines the tow data 
      //items first.

      const schema = node._def.schemafn(node.id, node, inputs || []);

      dispatch({
        type: 'iot.red/nodes/NODE_UPDATE_SCHEMA',
        id: n,
        schema:  node.inputs ? resolveconditions(node.id, schema) : schema,
      });
    }
    else{
      dispatch({
        type: 'iot.red/nodes/NODE_UPDATE_SCHEMA',
        id: n,
        schema: {},
      });
    }
  });
}

function nodeConfigureOk(){
    return {
      type: NODE_CONFIGURE_OK,
    }
} 


//TODO - reset schemas!!
function nodeConfigureCancel(){
    return (dispatch, getState)=>{
      const nodes = getState().nodes;
      const nid   = nodes.configuringId;
      const node  = nodes.nodesById[nid];
      const links = getState().ports.linksById;

      const inputs = Object.keys(links).filter((key)=>{
        const link = links[key]; 
          return link.target.id === nid;
      }).map((linkId)=>{
        const {name, label, id, schema, subtype, type, _def:{color,icon,category}} = nodes.nodesById[links[linkId].source.id];
        return {name,label,id,schema,type, subtype, color,icon,category};
      });

      const current =  Object.keys(node._def.defaults).reduce((acc, key)=>{
        acc[key]= node._def.defaults[key].value;
        return acc;
      },{});

      dispatch(updateSchema(nid, node._def.schemafn(nid, current, inputs.map((i)=>{
          return {id:i.id, schema:i.schema};                         
      }) || [])));
      
      dispatch({
        type: NODE_CONFIGURE_CANCEL,
      })
    }
}

function updateNode(property, value){
  return {
      type: NODE_UPDATE_VALUE,
      property,
      value,
  }  
}

function updateDownStream(id){
  return (dispatch, getState)=>{
    _updatedownstream(id, dispatch, getState);
  }
}

function updateDescription(id, description){
  return {
    type: NODE_UPDATE_DESCRIPTION,
    id,
    description,
  }
}

function updateSchema(id, schema){
  return {
    type: NODE_UPDATE_SCHEMA,
    id,
    schema
  }
}

export const actionCreators = {
  updateNode,
  updateSchema,
  updateDescription,
  updateDownStream,
  nodeConfigureOk,
  nodeConfigureCancel,
}