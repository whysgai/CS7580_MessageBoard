import { LOGIN_SUCCESS, LOGOUT } from "../actionConstants";

const INITIAL_STATE = {};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log("Reducer returning user", action.payload.user)
            return action.payload.user;
        case LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    };
};