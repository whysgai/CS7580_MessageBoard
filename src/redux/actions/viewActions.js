import { VIEW_LIST, VIEW_SINGLE } from "../actionConstants";

export const showList = () => ({
    type: VIEW_LIST
});

export const showSingle = threadId => ({
    type: VIEW_SINGLE,
    payload: {
        threadId
    }
});