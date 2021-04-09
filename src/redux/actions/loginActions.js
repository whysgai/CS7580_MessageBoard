import { LOGIN_SUCCESS, INVALID_LOGIN, LOGIN_NETWORK_ERROR, LOGOUT } from "../actionConstants";
import { showList } from "./viewActions";
import firebase from "../../fbConfig";

const database = firebase.firestore();

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: {
        user
    }
});

export const loginFail = () => ({
    type: INVALID_LOGIN
});

export const loginNetworkError = () => ({
    type: LOGIN_NETWORK_ERROR
});

export const logout = () => ({
    type: LOGOUT
});

export const validateUser = (username, password) => {
    return dispatch => {
        database.collection("users").where("username", "==", username).where("password", "==", password)
            .get()
            .then(querySnapshot => {
                if (querySnapshot.size === 1) {
                    const doc = querySnapshot.docs[0];
                    const user = {
                        id: doc.id
                    }
                    dispatch(loginSuccess(user));
                    dispatch(showList([]));
                } else {
                    console.log("Login failure");
                    dispatch(loginFail());
                }
            })
            .catch(error => {
                console.log("Login error", error);
                dispatch(loginNetworkError());
            });
    };
};