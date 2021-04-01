import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { readThreadByID } from "../redux/actions/threadActions";
import Reply from "./Reply";
import NewReply from "./NewReply";

const ThreadComponent = () => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    const threads = useSelector(state => state.threads);
    const threadId = useSelector(state => state.viewReducer.singleId);

    const parseTimestamp = (seconds) => {
        let dateTime = new Date(seconds);
        console.log("Timestamp:", dateTime);
        // now we need to parse the time object into a string
        let timeStamp = dateTime.toLocaleDateString("en-US", { year: '2-digit', month: 'long', day: 'numeric' }) + " at " + dateTime.toLocaleTimeString("en-US", {timeZone: 'America/New_York', hourCycle: 'h24'});
        return timeStamp;
    };

    const parseTags = (rawBody) => {
        let parsedBody =  rawBody.split(" ").map(word => 
            word.charAt(0) === "#" ?
                <a className="tag" href="#">{word}</a>
                :
                word        
        );
        let rtn = [];
        for(let word of parsedBody) {
            rtn.push(word);
            rtn.push(" ");
        }
        rtn.pop();
        return rtn;
    };

    return (
        <>            
            {
                threads.filter(thread => threadId === thread.id).map((thread, index) => 
                    <>
                        <p>Title: {thread.title}</p>
                        <p>Author: {thread.author}</p>
                        <p>Body: {parseTags(thread.body)}</p>
                        <p>Posted: {parseTimestamp(thread.timestamp)}</p>
                        <NewReply threadId={thread.id}/>
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