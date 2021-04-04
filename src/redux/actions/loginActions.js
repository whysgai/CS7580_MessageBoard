import { LOGIN_SUCCESS, INVALID_LOGIN, LOGIN_NETWORK_ERROR, LOGOUT } from "../actionConstants";
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
    console.log("Calling validateUser");
    return dispatch => {
        database.collection("users").where("username", "==", username).where("password", "==", password)
            .get()
            .then(querySnapshot => {
                if (querySnapshot.size === 1) {
                    const doc = querySnapshot.docs[0];
                    const user = {
                        id: doc.id
                    }
                    console.log("Action user:", user);
                    dispatch(loginSuccess(user));
                } else {
                    console.log("Loginfail");
                    dispatch(loginFail());
                }
            })
            .catch(error => {
                console.log("Login error", error);
                dispatch(loginNetworkError());
            });
    };
};