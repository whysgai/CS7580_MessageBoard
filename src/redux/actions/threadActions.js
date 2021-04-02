import { READ_THREADS, ADD_REPLY } from "../actionConstants";
import store from "../store";
import firebase from "../../fbConfig";

const database = firebase.firestore();

const readThreads = threads => ({
    type: READ_THREADS,
    payload: {
        threads
    }
});

const addReply = (threadId, reply) => ({
    type: ADD_REPLY,
    payload: {
        threadId,
        reply
    }
});

// const parseTimestamp = (seconds) => {
//     let dateTime = new Date(seconds);
//     console.log("Timestamp:", dateTime);
//     // now we need to parse the time object into a string
//     let timeStamp = dateTime.toLocaleDateString("en-US", { year: '2-digit', month: 'long', day: 'numeric' }) + " at " + dateTime.toLocaleTimeString("en-US", {timeZone: 'America/New_York', hourCycle: 'h24'});
//     return timeStamp;
// }

export const readAllThreads = () => {
    console.log("Reading threads from server");
    return dispatch => {
        database.collection("threads").get()
            .then(querySnapshot => {
                let threads = [];
                querySnapshot.forEach(doc => {
                    threads.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                console.log("Threads retreved from server", threads);
                dispatch(readThreads(threads));
            })
            .catch(error => {
                console.log("Login error", error);
                // dispatch(loginNetworkError());
            });
    };
};

export const readThreadByID = (id) => {
    console.log("Reading single thread from server");
    return dispatch => {
        database.collection("threads").where("id", "==", id).get()
            .then(querySnapshot => {
                let threads = [];
                querySnapshot.forEach(doc => {
                    threads.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                console.log("Threads retreved from server", threads);
                dispatch(readThreads(threads));
            })
            .catch(error => {
                console.log("Login error", error);
                // dispatch(loginNetworkError());
            });
    };
};

export const readThreadByTag = (searchTags) => {
    console.log("Reading thread tags from server");
    return dispatch => {
        database.collection("threads").where("tags", "array-contains-any", searchTags).get()
            .then(querySnapshot => {
                let threads = [];
                querySnapshot.forEach(doc => {
                    threads.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                console.log("Threads retreved from server", threads);
                // dispatch(readThreads(threads));
            })
            .catch(error => {
                console.log("Login error", error);
                // dispatch(loginNetworkError());
            });
    };
};

export const createThread = (thread) => {
    console.log("Posting thread to server");
    const threads = store.getState().threads;
    return dispatch => {
        database.collection("threads")
            .add(thread)
            .then(newThread => {
                let newThreads = threads.concat([{
                    ...thread,
                    id:  newThread.id
                }])
                console.log("Updated threads after add", newThreads);
                dispatch(readThreads(threads));
            })
            .catch(error => console.log(error));
    };
};

export const createReply = (threadId, reply) => {
    return dispatch => {
        console.log("Adding reply", reply);
        database.collection("threads").doc(threadId)
            .update({
                replies : firebase.firestore.FieldValue.arrayUnion(reply)
            })
            .then(() => {
                dispatch(addReply(threadId, reply));
            })
            .catch(error => {
                console.log("Could not add the reply");
            });
    };
};