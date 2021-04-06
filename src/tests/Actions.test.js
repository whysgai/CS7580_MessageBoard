import { loginFail, loginNetworkError, loginSuccess, logout, validateUser } from "../redux/actions/loginActions";
import * as loginActions from "../redux/actions/loginActions";
import { showList, showSingle } from "../redux/actions/viewActions";
import * as viewActions from "../redux/actions/viewActions";
import * as threadActions from "../redux/actions/threadActions";
import { LOGIN_SUCCESS, INVALID_LOGIN, LOGOUT, LOGIN_NETWORK_ERROR, VIEW_LIST, VIEW_SINGLE, 
    READ_THREADS, ADD_REPLY } from "../redux/actionConstants";


test.skip("Placeholder", () => {});

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
test.skip("Successfully reads all threads", () => {});
// readThreadByID
test.skip("Successfully reads single thread by ID", () => {});
// readThreadByTag
test.skip("Successfully reads threads with given tags", () => {});
// createThread
test.skip("Successfully adds thread to existing list", () => {});
// createReply
test.skip("Successfully adds reply to given thread", () => {});