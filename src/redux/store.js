import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./tasksReducer";

const reducers = combineReducers({
  todo: tasksReducer
})

const store = createStore(reducers)


window.store = store
export default store