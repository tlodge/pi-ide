import { MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, INIT, WINDOW_RESIZED} from './ActionTypes';
import {LAYOUT_HEIGHT} from './ViewConstants';

function _initialDimensions(){
  return {
    w : 700,
    h : LAYOUT_HEIGHT, 
  }
}

function initBoxes(){

    const {w,h} = _initialDimensions();
    
    return [
        []
    ];
            
    //{name: "one"}, {name: "two"}, {name: "three"}                                                                  
}

function appendbox(boxes, moving){
	//just append if row doesn't exist yet
	if (moving.torow >= boxes.length){
		return [...boxes, [{id: moving.id, name:moving.name}]];
	}else{
		return boxes.map((row, i)=>{
			if (i == moving.torow){
				return [...row.slice(0, moving.tocol), {id:moving.id, name:moving.name}, ...row.slice(moving.tocol)]
			}
			return row;
		});
	}
	return boxes;
}

function removebox(boxes, moving){

    return boxes.map((row, rowindex)=>{
        if (rowindex === moving.fromrow){
    		return [...row.slice(0,moving.fromcol), ...row.slice(moving.fromcol+1)]
    	}
    	return row;
    });
}

function layoutboxes(state){
    
    if (!state.moving || (state.moving.torow == null || state.moving.torow == undefined)){
        return state.boxes;
    }

    const boxes     = state.moving.torow == -1 ? [[], ...state.boxes] : state.boxes;
    const moving    = state.moving.torow == -1 ? {...state.moving, torow: 0, fromrow:state.moving.fromrow+1, tocol:0} : state.moving;

	if (moving && (moving.torow != moving.fromrow || moving.tocol != moving.fromcol)){
		return appendbox(removebox(boxes, moving), moving).filter((row)=>{ //remove any rows with an empty array
            return row.length > 0;
        });
	}
	return boxes;
}

function _getboxbyid(id, boxes){
    return  boxes.reduce((acc, arr, i)=>{
        return arr.reduce((_acc, item, j)=>{
            if (item.id === id){
                return {row: i, col: j};
            }
            return _acc;
        }, acc);

    },{row:-1,col:-1});
}

function boxes (state, action){

    switch (action.type) {
        
        case  MOUSE_MOVE:
            if (state.moving){
                const {row, col} = _getboxbyid(state.moving.id, state.boxes);
                const rc = state.boxes[row].length;
            	const tocol = Math.round((action.x + state.ox) / (state.w/3));
				const torow = Math.round((action.y + state.oy) / (state.h/state.boxes.length));

				//console.log(`${state.moving.id}, rc: ${rc}, moving to row: ${torow}, col: ${tocol}`);

                return { 
                		moving: {
                            ...state.moving, 
                			torow: torow,
                			tocol: tocol,
                			top: action.y + state.oy,
                			left:  action.x + state.ox,				
                        }
                }
            	
            }
           
            return {boxes: state.boxes};

        case MOUSE_UP:
           return layoutboxes(state);

        default:
            return state.boxes;

    }
} 

export function reducer(state = {
                                            moving:  null,
                                            x: 0,
                                            y: 0,
                                            ..._initialDimensions(),
                                            ox: 0,
                                            oy: 0,
                                        
                                            boxes: initBoxes(),

                                            
                                            

                                        }, action) {

	switch (action.type) {
		
		case INIT:
			
            return {
                ...state, 
                boxes: action.boxes||[[]]
            };
			
        case MOUSE_DOWN:
			const {w,h} = action;
            const {row, col} = _getboxbyid(action.box.id, state.boxes);
            const box = state.boxes[row][col];
            const left = (state.w / state.boxes[row].length) * col;
            const top  = row *  Math.round(state.h/state.boxes.length);
            const ox = left-state.x;
            const oy = top-state.y;

            //console.log(`selected ${box.name} and left = ${left} top = ${top}`);
            return {
                ...state, 
                moving: {
                	id: action.box.id,
                	name: action.box.name,
                	fromrow: row,
                	fromcol: col,
                	torow: row,
                	tocol: col,
                	top: state.y + oy,
                	left: state.x + ox,
                },
                w: w,
                h: h,
                ox: ox, //box.left - state.x, 
                oy: oy, //box.top - state.y,
            };

        case MOUSE_UP:
           
            return  {   
                ...state, 
                moving: null,
                boxes: boxes(state, action),
            };

		case  MOUSE_MOVE:
			

            return {    
                ...state,  
                ...boxes(state, action), 
                x: action.x, 
                y: action.y
            };
            

    	default:
    		return state;
    }
}