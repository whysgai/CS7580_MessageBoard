import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { readThreadByID } from "../redux/actions/threadActions";
import Reply from "./Reply";

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
                    <>
                        <p>Title: {thread.title}</p>
                        <p>Author: {thread.author}</p>
                        <p>Body: {thread.body}</p>
                        {
                            thread.replies.map((reply, index) =>
                                <Reply key={index} reply={reply} />
                            )
                        }
                    </>
                )
            }
        </>
    );
};

export default ThreadComponent;