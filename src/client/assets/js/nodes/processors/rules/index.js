import Node from "./node";
import reducer from './reducer';
import { extract_ptype_from_inputs } from 'utils/utils';

const outputfromrules = (rules)=>{

    console.log("ruklea re", rules);
    console.log("ruklea re", rules.map(r=>r.outputSchema? r.outputSchema.id:""));

    if (rules.length <0){
        return {}
    }
    if (rules.length === 1 || Array.from( new Set(rules.map(r=>r.outputSchema? r.outputSchema.id:""))).length === 1){
        return rules[0].outputSchema;
    }
    return {
        type: "oneOf",
        oneOf: rules.map(rule=>rule.outputSchema),
    }
}

const config = {
    category: 'processors',
    color: '#3771C8',
    defaults: {
        name: { value: "" },
        rules: { value: [] },
    },

    inputs: 1,

    outputs: 1,

    icon: "fas fa-clipboard-list",

    unicode: '\uf46d',

    label: function () {
        return this.name || "rules";
    },

    schemafn: (nid, node={}, inputs = []) => {
        const ofr = outputfromrules(node.rules);
        console.log("have outpiut from rules", ofr);

        return {
            input: {
                type: "any",
                description: "rules will take ANY object as input"
            },
            output: ofr,
           
            //ptype: extract_ptype_from_inputs(inputs),
            
        }
    },

    labelStyle: function () {
        return this.name ? "node_label_italic" : "";
    },

    descriptionfn: () => "<p> This node allows you to create outputs based on rules applied to inputs.  You can use this manipulate data without having to write code </p>",

    risk: (subtype = "") => {
        return {
            score: 0,
            reason: "no risk in creating rules"
        }
    },
}

export default {
    type: "rules",
    def: Object.assign({ _: (id) => { return id } }, config, { nodetype: "rules" }),
    node: Node,
    reducer
}
