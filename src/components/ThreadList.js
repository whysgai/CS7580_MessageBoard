import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { readThreads } from "../redux/actions/threadActions";
import ThreadSnippet from "./ThreadSnippet";
import ThreadComponent from "./ThreadComponent";

const ThreadList = () => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    const threads = useSelector(state => state.threads);

    useEffect(() => {
        if (loginState === LOGIN_STATE.LOGGED_IN) {
            dispatch(readThreads());
        }
    }, [loginState]);

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