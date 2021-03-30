import { VIEW_STATE } from "../storeConstants";
import { VIEW_LIST, VIEW_SINGLE } from "../actionConstants";

const INITIAL_STATE = {
    viewState: VIEW_STATE.THREAD_LIST,
    singleId: ""
};

export const threadReducer  = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case VIEW_LIST:
            return { 
                viewState: VIEW_STATE.THREAD_LIST,
                singleId: "" 
            };
        case VIEW_SINGLE:
            return { 
                viewState: VIEW_STATE.SINGLE_THREAD,
                singleId: action.payload.threadId 
            };
        default:
            return state;
    };
};