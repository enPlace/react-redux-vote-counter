import { combineReducers } from "redux"
import counterReducer from "./counterSlice"
import candidateReducer from "./candidateSlice"

const rootReducer =  combineReducers({
  counter: counterReducer,
  candidates: candidateReducer 
})

export default  rootReducer