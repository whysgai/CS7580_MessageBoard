import { _ } from "lodash";
import { rootReducer } from "../redux/store";
import { INITIAL_STATE, LOGIN_STATE, VIEW_STATE, THREAD_LIST, SINGLE_THREAD } from "../redux/storeConstants";
import { LOGIN_SUCCESS, INVALID_LOGIN, LOGOUT, LOGIN_NETWORK_ERROR, VIEW_LIST, VIEW_SINGLE, 
    READ_THREADS, ADD_REPLY } from "../redux/actionConstants";

let TEST_STATE = {};

const SAMPLE_THREADS = [
    {
        id: "001",
        author: "Starsky",
        body: "First sample thread body here words #tag #more-tag #heyoo",
        replies: [],
        tags: ["#tag", "#more-tag", "#heyoo"],
        timestamp: 1617569322,
        title: "First"
    },
    {
        id: "002",
        author: "Hutch",
        body: "Second but with more words and no tags and maybe some replies I don't really know this is just filler text why didn't I get lorem ipsum?",
        replies: [
            {
                id: "021",
                author: "Starsky",
                body: "Heeeeeey bruh!",
                timestamp: 1617569453
            }
        ],
        tags: [],
        timestamp: 1617569393,
        title: "Second"
    }
];

beforeAll(() => {
    //console.log("++++++++ REDUCER TESTS +++++++++++++++");
});

beforeEach(() => {
    TEST_STATE = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_OUT
        },
        testState: true,
        user: -1,
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    }
});

test("Unknown action type returns store unchanged", () => {
    expect(rootReducer(TEST_STATE, {})).toEqual(TEST_STATE);
})

//Login reducer tests
//  login success
test("Logging in updates login state", () =>{
    const testLoginSuccess = {
        type: LOGIN_SUCCESS,
        payload: {
            user: 1
        }
    }

    const endState = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_IN
        },
        testState: true,
        user: 1,
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    expect(rootReducer(TEST_STATE, testLoginSuccess)).toEqual(endState);
});
//  invalid login
test("Invalid login updates login state", () =>{
    const testLoginInvalid = {
        type: INVALID_LOGIN,
    }

    const endState = {
        loginReducer : {
            loginState: LOGIN_STATE.INVALID_LOGIN
        },
        testState: true,
        user: -1,
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    expect(rootReducer(TEST_STATE, testLoginInvalid)).toEqual(endState);
});
//  login network error
test("Login error updates login state", () =>{
    const testLoginError = {
        type: LOGIN_NETWORK_ERROR,
    }

    const endState = {
        loginReducer : {
            loginState: LOGIN_STATE.NETWORK_ERROR
        },
        testState: true,
        user: -1,
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    expect(rootReducer(TEST_STATE, testLoginError)).toEqual(endState);
});
//  logout
test("Logging out updates login state", () =>{
    TEST_STATE = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_IN
        },
        testState: true,
        user: 1,
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    const testLogout = {
        type: LOGOUT,
    };

    const endState = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_OUT
        },
        testState: true,
        user: {},
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    expect(rootReducer(TEST_STATE, testLogout)).toEqual(endState);
});

//thread reducer tests
//  read threads
test("Successful request for many threads populates threads in state", () =>{
    const testReadThreads = {
        type: READ_THREADS,
        payload: {
            threads: _.cloneDeep(SAMPLE_THREADS)
        }
    };

    const endState = {
        ...TEST_STATE,
        threads:     [{
            id: "001",
            author: "Starsky",
            body: "First sample thread body here words #tag #more-tag #heyoo",
            replies: [],
            tags: ["#tag", "#more-tag", "#heyoo"],
            timestamp: 1617569322,
            title: "First"
        },
        {
            id: "002",
            author: "Hutch",
            body: "Second but with more words and no tags and maybe some replies I don't really know this is just filler text why didn't I get lorem ipsum?",
            replies: [
                {
                    id: "021",
                    author: "Starsky",
                    body: "Heeeeeey bruh!",
                    timestamp: 1617569453
                }
            ],
            tags: [],
            timestamp: 1617569393,
            title: "Second"
        }]
    };

    expect(rootReducer(TEST_STATE, testReadThreads)).toEqual(endState);
});

test("Successful request for one thread populates thread in state", () =>{
    const testReadThreads = {
        type: READ_THREADS,
        payload: {
            threads: [_.cloneDeep(SAMPLE_THREADS[0])]
        }
    };

    const endState = {
        ...TEST_STATE,
        threads:     [{
            id: "001",
            author: "Starsky",
            body: "First sample thread body here words #tag #more-tag #heyoo",
            replies: [],
            tags: ["#tag", "#more-tag", "#heyoo"],
            timestamp: 1617569322,
            title: "First"
        }]
    };

    expect(rootReducer(TEST_STATE, testReadThreads)).toEqual(endState);
});
//  add reply
test("Successfully posting a new reply update the correct thread in state", () =>{
    TEST_STATE = {
        ...TEST_STATE,
        threads: _.cloneDeep(SAMPLE_THREADS)
    }
    
    const testReadThreads = {
        type: ADD_REPLY,
        payload: {
            threadId: "002",
            reply: {
                id: "022",
                author: "Hutch",
                body: "Yo what up?",
                timestamp: 161758934
            }
        }
    };

    const endState = {
        ...TEST_STATE,
        threads:     [{
            id: "001",
            author: "Starsky",
            body: "First sample thread body here words #tag #more-tag #heyoo",
            replies: [],
            tags: ["#tag", "#more-tag", "#heyoo"],
            timestamp: 1617569322,
            title: "First"
        },
        {
            id: "002",
            author: "Hutch",
            body: "Second but with more words and no tags and maybe some replies I don't really know this is just filler text why didn't I get lorem ipsum?",
            replies: [
                {
                    id: "021",
                    author: "Starsky",
                    body: "Heeeeeey bruh!",
                    timestamp: 1617569453
                },
                {
                    id: "022",
                    author: "Hutch",
                    body: "Yo what up?",
                    timestamp: 161758934
                }
            ],
            tags: [],
            timestamp: 1617569393,
            title: "Second"
        }]
    };

    expect(rootReducer(TEST_STATE, testReadThreads)).toEqual(endState);
});


//view reducer tests
//  view single
test("Setting the view to single populates state info", () =>{
    const testViewSingle = {
        type: VIEW_SINGLE,
        payload: {
            threadId: "001"
        }
    };

    const endState = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_OUT
        },
        testState: true,
        user: -1,
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "001",
            view: VIEW_STATE.SINGLE_THREAD
        }
    };

    expect(rootReducer(TEST_STATE, testViewSingle)).toEqual(endState);
});
//  view list
test("Setting the view to list populates state info", () =>{
    TEST_STATE = {
        ...TEST_STATE,
        viewReducer: {
            searchTags: [],
            singleId: "001",
            view: VIEW_STATE.SINGLE_THREAD
        }
    }

    const testViewList = {
        type: VIEW_LIST,
        payload: {
            searchTags: []
        }
    };

    const endState = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_OUT
        },
        testState: true,
        user: -1,
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    expect(rootReducer(TEST_STATE, testViewList)).toEqual(endState);
});

//user reducer tests
//  login success
test("Login populates user info", () =>{
    const testLoginSuccess = {
        type: LOGIN_SUCCESS,
        payload: {
            user: {
                id: "Snoopy"
            }
        }
    }

    const endState = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_IN
        },
        testState: true,
        user: {
            id: "Snoopy"
        },
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    expect(rootReducer(TEST_STATE, testLoginSuccess)).toEqual(endState);
});
//  logout
test("Logout removes user info", () =>{
    TEST_STATE = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_IN
        },
        testState: true,
        user: {
            id: "Linus"
        },
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    const testLogout = {
        type: LOGOUT,
    };

    const endState = {
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_OUT
        },
        testState: true,
        user: {},
        threads: [],
        viewReducer: {
            searchTags: [],
            singleId: "",
            view: VIEW_STATE.THREAD_LIST
        }
    };

    expect(rootReducer(TEST_STATE, testLogout)).toEqual(endState);
});