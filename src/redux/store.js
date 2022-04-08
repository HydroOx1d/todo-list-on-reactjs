import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { authReducer } from "./authReducer.";
import { tasksReducer } from "./tasksReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  todo: tasksReducer,
  auth: authReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export default store