import { combineReducers } from "redux"
import counterReducer from "../features/totalCount/counterSlice"
import voteReducer from "../features/voteTally/voteSlice"

export default combineReducers({
  counter: counterReducer,
  votes: voteReducer 
})