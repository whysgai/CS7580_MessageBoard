import { READ_THREADS, ADD_REPLY } from "../actionConstants";

const INITIAL_STATE = [];

export const threadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case READ_THREADS:
            console.log("Setting threads in state", action.payload.threads);
            return [...action.payload.threads];
        case ADD_REPLY:
            const mergedReplies = [
                ...state.filter(thread =>
                    action.payload.threadId === thread.id
                )[0].replies, 
                action.payload.reply
            ];
            const newState = state.map(thread => 
                thread.id === action.payload.threadId ? 
                    {
                        ...thread,
                        replies : mergedReplies
                    }
                    :
                    thread
            );
            return newState;  
        default:
            return state;
    };
};