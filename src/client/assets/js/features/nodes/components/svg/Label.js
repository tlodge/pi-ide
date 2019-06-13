import React, { Component, PropTypes } from 'react';
import className from 'classnames';

export default class Label extends Component {

    constructor(props){
        super(props);
    }


    render(){
       
        const {d} = this.props;

        if (!d._def.label || !d.label){   
            return null;
        }
        
        const nodelabelclassname = {
            node_label: true,
            node_label_right: d._def.align && d._def.align == "right", 
            node_label_left: d._def.align && d._def.align == "left", 
        };    

        if (d.labelStyle){
            nodelabelclassname[d.labelStyle] = true;
        }
    
        const nodelabelprops = {
            x: d._def.align && d.def.align === "right" ? d.w-38 : 38,
            y: (d.h/2)-1,
            dy: ".35em",
            textAnchor: d._def.align ? d._def.align === "right" ? 'end' : 'start' : 'start',
        }


        return  <text className={className(nodelabelclassname)} {...nodelabelprops}> 
                    {d.label}
                </text>

    }
}