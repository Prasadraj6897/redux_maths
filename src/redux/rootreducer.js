import {additionreducer} from "./reducer_action/additionreducer"
import {subtrationreducer} from "./reducer_action/subtractionreducer"
import {multiplicationreducer}  from ".//reducer_action/multiplicationreducer"
import {divisionreducer}  from ".//reducer_action/divisionreducer"

import {combineReducers} from "redux"

let RootReducers = combineReducers({RootReducers : additionreducer, subtrationreducer, multiplicationreducer, divisionreducer})

export {RootReducers};