import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { showList, showLogin } from "../redux/actions/viewActions"
;
import Reply from "./Reply";
import NewReply from "./NewReply";

const ThreadComponent = () => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    const threads = useSelector(state => state.threads);
    const threadId = useSelector(state => state.viewReducer.singleId);

    const parseTimestamp = (seconds) => {
        let dateTime = new Date(seconds);
        // now we need to parse the time object into a string
        let timeStamp = dateTime.toLocaleDateString("en-US", { year: '2-digit', month: 'long', day: 'numeric' }) + " at " + dateTime.toLocaleTimeString("en-US", {timeZone: 'America/New_York', hourCycle: 'h24'});
        return timeStamp;
    };

    const parseTags = (rawBody) => {
        let parsedBody =  rawBody.split(" ").map((word, index) => 
            word.charAt(0) === "#" ?
                <a className="tag" href="#" value={word} onClick={() => dispatch(showList(word))} key={index}>{word}</a>
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
                    <div className="card card-body" key={index}>
                        <div className="list-group-flush">
                            <div className="list-group-item">
                                <div className="thread-title-box">
                                    <h3>{thread.title}</h3>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={() => dispatch(showList(""))}/>
                                </div>                                
                                <p>Author: {thread.author}</p>
                                <p>{parseTags(thread.body)}</p>
                                <p>Posted: {parseTimestamp(thread.timestamp)}</p>
                            </div>
                            <div className="list-group-item">
                                {
                                    loginState === LOGIN_STATE.LOGGED_IN ?
                                        <NewReply threadId={thread.id}/>
                                        :
                                        <>
                                            <p>Want to join the conversation? <button className="btn btn-success" onClick={() => dispatch(showLogin())}>Log In</button></p>
                                        </>
                                }
                            </div> 
                            {
                                thread.replies.map((reply, index) =>
                                    <Reply key={index} reply={reply} />
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ThreadComponent;