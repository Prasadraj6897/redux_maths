import {ADDITIONTYPE} from "./action";

let initialvalue  = {
    value : 0
}

let additionreducer = (state = initialvalue, action) => {
    
    switch(action.type){
        case ADDITIONTYPE:
            return {
               
                additionvalue : action.addvalue.count1 + action.addvalue.count2
                
            }
                     
        default:
            return state;
    }


}
export {additionreducer}