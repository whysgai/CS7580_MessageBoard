import { createStore } from "redux";
import {INITIAL_STATE, LOGIN_STATE} from "./storeConstants";

const rootReducer = (state = INITIAL_STATE, action) => {};

export default createStore(rootReducer);