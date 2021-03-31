import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { readThreadByID } from "../redux/actions/threadActions";

const ThreadComponent = () => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    const threads = useSelector(state => state.threads);
    const threadId = useSelector(state => state.viewReducer.singleId);

    // useEffect(() => {
    //     if (loginState === LOGIN_STATE.LOGGED_IN) {
    //         dispatch(readThreadByID(threadId));
    //     }
    // }, [loginState]);

    return (
        <>            
            {
                threads.filter(thread => threadId === thread.id).map((thread, index) => 
                    // <ThreadSnippet key={index} thread={thread}/>
                    <p>Just one thread{console.log("Single thread view", thread)}</p>
                    
                )
            }
        </>
    );
};

export default ThreadComponent;