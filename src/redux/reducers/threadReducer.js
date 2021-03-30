import { READ_THREADS } from "../actionConstants";

const INITIAL_STATE = [];

export const threadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case READ_THREADS:
            return [...action.payload.threads];
        default:
            return state;
    };
};