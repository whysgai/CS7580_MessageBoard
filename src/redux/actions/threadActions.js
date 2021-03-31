import { READ_THREADS } from "../actionConstants";
import store from "../store";
import firebase from "../../fbConfig";

const database = firebase.firestore();

const loadThreads = threads => ({
    type: READ_THREADS,
    payload: {
        threads
    }
});

export const stampTime = () => {

};

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
                dispatch(loadThreads(threads));
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
                dispatch(loadThreads(threads));
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
                dispatch(loadThreads(threads));
            })
            .catch(error => console.log(error));
    }
};