import {createStore, combineReducers, applyMiddleware} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {userReducer} from "./reducers/userReducer";
import {threadReducer} from "./reducers/threadReducer";
import thunkMiddleware from "redux-thunk";

export const rootReducer = combineReducers({
    loginReducer,
    user: userReducer,
    threads: threadReducer
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));