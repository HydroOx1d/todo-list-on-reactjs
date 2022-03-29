import { combineReducers, createStore, applyMiddleware } from "redux";
import { authReducer } from "./authReducer.";
import { tasksReducer } from "./tasksReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  todo: tasksReducer,
  auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))


window.store = store
export default store