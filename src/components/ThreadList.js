import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { readAllThreads } from "../redux/actions/threadActions";
import ThreadSnippet from "./ThreadSnippet";
import ThreadComponent from "./ThreadComponent";

const ThreadList = () => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    const threads = useSelector(state => state.threads);
    const stateSearchTags = useSelector(state => state.viewReducer.searchTags);

    // useEffect(() => {
    //     console.log("Thread List state search tags", stateSearchTags);
    //     if (loginState === LOGIN_STATE.LOGGED_IN) {
    //         dispatch(readAllThreads());
    //     }
    // }, [loginState]);

    return (
        <>
            {console.log("Threads", threads)}
            <p>Threads: </p>
            {
                threads.map((thread, index) => 
                    <ThreadSnippet key={index} thread={thread}/>
                )
            }
            
        </>
    );
};

export default ThreadList;