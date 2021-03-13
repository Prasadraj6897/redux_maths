import {MULTIPLICATIONTYPE} from "./action";

let initialvalue  = {
    value : 0
}

let multiplicationreducer = (state = initialvalue, action) => {
    
    switch(action.type){
        case MULTIPLICATIONTYPE:
            return {
               
                multiplicationvalue : action.subvalue.count1 * action.subvalue.count2
                
            }
                     
        default:
            return state;
    }


}
export {multiplicationreducer}