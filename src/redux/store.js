import {RootReducers } from "./rootreducer"

import {createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"

let store = createStore(RootReducers, composeWithDevTools())

export {store};