import { loginFail, loginNetworkError, loginSuccess, logout } from "../redux/actions/loginActions";
import {} from "../redux/actions/viewActions";
import {} from "../redux/actions/threadActions";
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
test.skip("Generate login success action on valid user action", () => {
    // Dependent on mock data
    const user = {
        id: "0",
        username: "j_newbie",
        firstname: "J",
        lastname: "Newbie",
        onboardingComplete: false,
        hasUsedFilter: false
    }

    const expectedAction = {
        type: LOGIN_SUCCESS,
        payload: {
            user
        }
    }

    expect(validateUser("j_newbie", "1234")).toEqual(expectedAction);
});
// logout
test("Generate logout success action", () => {
    const expectedAction = {type: LOGOUT};
    expect(logout()).toEqual(expectedAction);
});

//view actions
// showList
test.skip("Generate show list of threads action", () => {});
// showSingle
test.skip("Generate show single full thread action", () => {});

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