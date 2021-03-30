import {createStore, combineReducers, applyMiddleware} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {userReducer} from "./reducers/userReducer";
// import {todosReducer} from "./reducers/todos";
import thunkMiddleware from "redux-thunk";

export const rootReducer = combineReducers({
    loginReducer,
    userReducer
    // todos: todosReducer
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));