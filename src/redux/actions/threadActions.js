import { READ_THREADS } from "../actionConstants";
import store from "../store";
import firebase from "../../fbConfig";

const database = firebase.firestore();

const loadThreads = threads => ({
    type: READ_THREADS,
    payload: {
        threads
    }
})

export const readThreads = () => {
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