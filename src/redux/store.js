import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { loginReducer } from "./reducers/loginReducer";
import { viewReducer } from "./reducers/viewReducer";
import { userReducer } from "./reducers/userReducer";
import { threadReducer } from "./reducers/threadReducer";

export const rootReducer = combineReducers({
    loginReducer,
    viewReducer,
    user: userReducer,
    threads: threadReducer
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));