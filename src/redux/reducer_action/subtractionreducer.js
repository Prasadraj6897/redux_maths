import {SUBTRACTIONTYPE} from "./action";

let initialvalue  = {
    value : 0
}

let subtrationreducer = (state = initialvalue, action) => {
    
    switch(action.type){
        case SUBTRACTIONTYPE:
            return {
               
                subtractionvalue : action.subvalue.count1 - action.subvalue.count2
                
            }
                     
        default:
            return state;
    }


}
export {subtrationreducer}