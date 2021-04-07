import { READ_THREADS, ADD_REPLY } from "../actionConstants";
import store from "../store";
import firebase from "../../fbConfig";

const database = firebase.firestore();

export const readThreads = threads => ({
    type: READ_THREADS,
    payload: {
        threads
    }
});

export const addReply = (threadId, reply) => ({
    type: ADD_REPLY,
    payload: {
        threadId,
        reply
    }
});

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
                threads.sort((threadA, threadB) => threadA.timestamp - threadB.timestamp);
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
                threads.sort((threadA, threadB) => threadA.timestamp - threadB.timestamp);
                dispatch(readThreads(threads));
            })
            .catch(error => {
                console.log("Login error", error);
                // dispatch(loginNetworkError());
            });
    };
};

export const readThreadByTag = (searchTags) => {
    console.log("Reading thread tags from server", searchTags);
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
                threads.sort((threadA, threadB) => threadA.timestamp - threadB.timestamp);
                dispatch(readThreads(threads));
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
                threads.sort((threadA, threadB) => threadA.timestamp - threadB.timestamp);
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