import { rootReducer } from "../redux/store";
import { LOGIN_STATE, VIEW_STATE } from "../redux/storeConstants";
import { LOGGED_OUT, THREAD_LIST, READ_THREADS } from "../redux/actionConstants";

const TEST_STATE_INIT = {
    loginState: LOGIN_STATE.LOGGED_OUT,
    view: VIEW_STATE.THREAD_LIST,
    user: -1,
    threads: [],
    singleId: "",
    searchTags: []
};

const SAMPLE_THREADS = [
    {
        author: "Starsky",
        body: "First sample thread body here words #tag #more-tag #heyoo",
        replies: [],
        tags: ["#tag", "#more-tag", "#heyoo"],
        timestamp: 1617569322,
        title: "First"
    },
    {
        author: "Hutch",
        body: "Second but with more words and no tags and maybe some replies I don't really know this is just filler text why didn't I get lorem ipsum?",
        replies: [
            {
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

beforeEach(() => {
    let TEST_STATE = TEST_STATE_INIT;
});

//Login reducer tests
//  login success
test.skip("Logging in updates login state", () =>{});
//  invalid login
test.skip("Invalid login updates login state", () =>{});
//  login network error
test.skip("Login error updates login state", () =>{});
//  logout
test.skip("Logging out updates login state", () =>{});

//thread reducer tests
//  read threads
test("Successful request for many threads populates threads in state", () =>{
    let testReadThreads = {
        type: READ_THREADS,
        payload: {
            threads: []
        }
    }
});

test.skip("Successful request for one thread populates thread in state", () =>{});
//  add reply
test.skip("Successfully posting a new reply update the correct thread in state", () =>{});


//view reducer tests
//  view single
test.skip("Setting the view to single populates state info", () =>{});
//  view list
test.skip("Setting the view to list populates state info", () =>{});


//user reducer tests
//  login success
test.skip("Login populates user info", () =>{});
//  logout
test.skip("Logout removes user info", () =>{});