import { _ } from "lodash";
import { loginFail, loginNetworkError, loginSuccess, logout, validateUser } from "../redux/actions/loginActions";
import * as loginActions from "../redux/actions/loginActions";
import { showList, showSingle } from "../redux/actions/viewActions";
import * as viewActions from "../redux/actions/viewActions";
import { readAllThreads, readThreadByID, readThreadByTag, createThread, createReply } from "../redux/actions/threadActions";
import * as threadActions from "../redux/actions/threadActions";
import { LOGIN_SUCCESS, INVALID_LOGIN, LOGOUT, LOGIN_NETWORK_ERROR, VIEW_LIST, VIEW_SINGLE, 
    READ_THREADS, ADD_REPLY } from "../redux/actionConstants";


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
    //console.log("++++++++ ACTION TESTS +++++++++++++++");
});

//login actions
// login success
test("Generate login success action", () => {
    const user = {
        id: "Starbuck"
    };

    const expectedAction = {
        type: LOGIN_SUCCESS,
        payload: {
            user
        }
    };

    expect(loginSuccess(user)).toEqual(expectedAction);
});
// login fail
test("Generate invalid login action", () => {
    const expectedAction = {type: INVALID_LOGIN};
    expect(loginFail()).toEqual(expectedAction);
});
// login error
test("Generate login error action", () => {
    const expectedAction = {type: LOGIN_NETWORK_ERROR};
    expect(loginNetworkError()).toEqual(expectedAction);
});
// validate user
test("Generate login success action on valid user action", () => {
    const user = {
        id: "001",
        username: "apollo"
    }

    const expectedAction = {
        type: LOGIN_SUCCESS,
        payload: {
            user
        }
    }

    jest.spyOn(loginActions, "validateUser").mockImplementation(() => ({
        type: LOGIN_SUCCESS,
        payload: {
            user: {
                id: "001",
                username: "apollo"
            }
        }
    }));

    expect(validateUser("apollo", "1234")).toEqual(expectedAction);
});
// logout
test("Generate logout success action", () => {
    const expectedAction = {type: LOGOUT};
    expect(logout()).toEqual(expectedAction);
});

//view actions
// showList
test("Generate show list of threads action", () => {
    const searchTags = ["#Battle", "#Star", "#Galactica"];

    const expectedAction = {
        type: VIEW_LIST,
        payload: {
            searchTags
        }
    };

    expect(showList(searchTags)).toEqual(expectedAction);
});
// showSingle
test("Generate show single full thread action", () => {
    const threadId = "Boomer";

    const expectedAction = {
        type: VIEW_SINGLE,
        payload: {
            threadId
        }
    };

    expect(showSingle(threadId)).toEqual(expectedAction);
});

//thread actions
// readAllThreads
test("Successfully reads all threads", () => {
    const testThreads = _.cloneDeep(SAMPLE_THREADS);

    const expectedAction = {
        type: READ_THREADS,
        payload: {
            threads: testThreads
        }
    }

    jest.spyOn(threadActions, "readAllThreads").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: _.cloneDeep(SAMPLE_THREADS)
        }
    }));

    expect(readAllThreads(testThreads)).toEqual(expectedAction);
});
// readThreadByID
test("Successfully reads single thread by ID", () => {
    const id = "002";

    const testThreads = [_.cloneDeep(SAMPLE_THREADS[1])];

    const expectedAction = {
        type: READ_THREADS,
        payload: {
            threads: testThreads
        }
    }

    jest.spyOn(threadActions, "readThreadByID").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: [_.cloneDeep(SAMPLE_THREADS[1])]
        }
    }));

    expect(readThreadByID(id)).toEqual(expectedAction);
});
// readThreadByTag
test("Successfully reads threads with given tags", () => {
    const tags = ["#heyoo"];

    const testThreads = [_.cloneDeep(SAMPLE_THREADS[0])];

    const expectedAction = {
        type: READ_THREADS,
        payload: {
            threads: testThreads
        }
    }

    jest.spyOn(threadActions, "readThreadByTag").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: [_.cloneDeep(SAMPLE_THREADS[0])]
        }
    }));

    expect(readThreadByTag(tags)).toEqual(expectedAction);
});
// createThread
test("Successfully adds thread to existing list", () => {
    const newThread = {
        id: "003",
        author: "Columbo",
        body: "New thread for create thread test",
        replies: [],
        tags: ["#newthread"],
        timestamp: 1617567421,
        title: "Create Thread Test"
    };

    const testThreads = _.cloneDeep(SAMPLE_THREADS);
    testThreads.push(_.cloneDeep(newThread));

    const expectedAction = {
        type: READ_THREADS,
        payload: {
            threads: testThreads
        }
    }

    let finalThreads = _.cloneDeep(SAMPLE_THREADS);
    finalThreads.push(_.cloneDeep(newThread));

    jest.spyOn(threadActions, "createThread").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: _.cloneDeep(finalThreads)
        }
    }));

    expect(createThread(newThread)).toEqual(expectedAction);
});
// createReply
test("Successfully adds reply to given thread", () => {
    const testThreadId = "001"

    const newReply = {
        id: "012",
        author: "Poirot",
        body: "New reply for create reply test",
    };

    const expectedAction = {
        type: ADD_REPLY,
        payload: {
            threadId: testThreadId,
            reply: newReply
        }
    }

    jest.spyOn(threadActions, "createReply").mockImplementation(() => ({
        type: ADD_REPLY,
        payload: {
            threadId: testThreadId,
            reply: newReply
        }
    }));

    expect(createReply(testThreadId, newReply)).toEqual(expectedAction);
});