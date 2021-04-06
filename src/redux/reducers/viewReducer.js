import { VIEW_STATE } from "../storeConstants";
import { VIEW_LIST, VIEW_SINGLE, VIEW_LOGIN } from "../actionConstants";

const INITIAL_STATE = {
    view: VIEW_STATE.THREAD_LIST,
    singleId: "",
    searchTags: []
};

export const viewReducer  = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case VIEW_LIST:
            return {
                ...state,
                view: VIEW_STATE.THREAD_LIST,
                singleId: "",
                searchTags: action.payload.searchTags 
            };
        case VIEW_SINGLE:
            return {
                ...state, 
                view: VIEW_STATE.SINGLE_THREAD,
                singleId: action.payload.threadId 
            };
        case VIEW_LOGIN:
            return {
                ...state,
                view: VIEW_STATE.LOGIN,
            }
        default:
            return state;
    };
};