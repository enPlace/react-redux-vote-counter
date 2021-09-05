import { combineReducers } from "redux"
import counterReducer from "./counterSlice"
import voteReducer from "./voteSlice"

const rootReducer =  combineReducers({
  counter: counterReducer,
  votes: voteReducer 
})

export default  rootReducer