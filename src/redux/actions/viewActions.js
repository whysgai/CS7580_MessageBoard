import { VIEW_LIST, VIEW_SINGLE, VIEW_LOGIN } from "../actionConstants";

export const showList = searchTags => ({
    type: VIEW_LIST,
    payload: {
        searchTags
    }
});

export const showSingle = threadId => ({
    type: VIEW_SINGLE,
    payload: {
        threadId
    }
});

export const showLogin = () => ({
    type: VIEW_LOGIN
});