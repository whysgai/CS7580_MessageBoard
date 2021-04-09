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
                threads.sort((threadA, threadB) => threadA.timestamp - threadB.timestamp);
                dispatch(readThreads(threads));
            })
            .catch(error => {
                console.log("Server error", error);
            });
    };
};

export const readThreadByID = (id) => {
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
                threads.sort((threadA, threadB) => threadA.timestamp - threadB.timestamp);
                dispatch(readThreads(threads));
            })
            .catch(error => {
                console.log("Server error", error);
            });
    };
};

export const readThreadByTag = (searchTags) => {
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
                threads.sort((threadA, threadB) => threadA.timestamp - threadB.timestamp);
                dispatch(readThreads(threads));
            })
            .catch(error => {
                console.log("Server error", error);
            });
    };
};

export const createThread = (thread) => {
    const threads = store.getState().threads;
    return dispatch => {
        database.collection("threads")
            .add(thread)
            .then(newThread => {
                let newThreads = threads.concat([{
                    ...thread,
                    id:  newThread.id
                }])
                newThreads.sort((threadA, threadB) => threadA.timestamp - threadB.timestamp);
                dispatch(readThreads(newThreads));
            })
            .catch(error => console.log(error));
    };
};

export const createReply = (threadId, reply) => {
    return dispatch => {
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