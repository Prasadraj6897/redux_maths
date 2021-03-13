const ADDITIONTYPE = "ADDITIONTYPE"
const SUBTRACTIONTYPE = "SUBTRACTIONTYPE"
const MULTIPLICATIONTYPE = "MULTIPLICATIONTYPE"
const DIVISIONTYPE = "DIVISIONTYPE"


let additionaction = (state) => {
    
    return {
        addvalue : {...state},
        type : ADDITIONTYPE
        
    }
    
}
let subtraction = (state) => {
    return {
        subvalue : {...state},
        type : SUBTRACTIONTYPE
    }
}
let multiplicaction = (state) => {
    return {
        subvalue : {...state},
        type : MULTIPLICATIONTYPE
    }
}
let divisionaction = (state) => {
    return {
        subvalue : {...state},
        type : DIVISIONTYPE
    }
}

export {ADDITIONTYPE, SUBTRACTIONTYPE, MULTIPLICATIONTYPE, DIVISIONTYPE, additionaction, subtraction, multiplicaction, divisionaction} ;