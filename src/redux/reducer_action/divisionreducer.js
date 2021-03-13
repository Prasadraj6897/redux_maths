import {DIVISIONTYPE} from "./action";

let initialvalue  = {
    value : 0
}

let divisionreducer = (state = initialvalue, action) => {
    
    switch(action.type){
        case DIVISIONTYPE:
            return {
               
                divisionvalue : action.subvalue.count1 / action.subvalue.count2
                
            }
                     
        default:
            return state;
    }


}
export {divisionreducer}