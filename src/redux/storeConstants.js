export const LOGIN_STATE = {
    LOGGED_IN: "logged in",
    LOGGED_OUT: "logged out",
    INVALID_LOGIN: "invalid login",
    NETWORK_ERROR: "network error"
};

export const VIEW_STATE = {
    THREAD_LIST: "thread_list",
    SINGLE_THREAD: "single_thread"
};

// export const INITIAL_STATE = {
//     loginState: LOGIN_STATE.LOGGED_OUT,
//     view: VIEW_STATE.THREAD_LIST,
//     user: -1,
//     threads: [],
//     singleId: "",
//     searchTags: []
// }

export const INITIAL_STATE = {
    loginState: LOGIN_STATE.LOGGED_IN,
    view: VIEW_STATE.THREAD_LIST,
    user: {
        id: "ObjU6WstIoYloXphN590",
        username: "originator",
        password: "1234"
    },
    threads: [],
    singleId: "",
    searchTags: []
}