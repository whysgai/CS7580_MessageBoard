import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showList, showSingle } from "../redux/actions/viewActions";

const ThreadSnippet = (props) => {
    const dispatch = useDispatch();

    const parseTimestamp = (seconds) => {
        let dateTime = new Date(seconds);
        // now we need to parse the time object into a string
        let timeStamp = dateTime.toLocaleDateString("en-US", { year: '2-digit', month: 'long', day: 'numeric' }) + " at " + dateTime.toLocaleTimeString("en-US", {timeZone: 'America/New_York', hourCycle: 'h24'});
        return timeStamp;
    };

    const parseTags = (rawBody) => {
        //console.log("Raw body:", rawBody);
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

    const truncateBody = () => {
        if (props.thread.body.length > 200) {
            return parseTags(props.thread.body.substring(0,200) + "...");
        } else {
            return parseTags(props.thread.body);
        }        
    };

    return (
        <div className="list-group-item" data-testid="thread-snippet-test">
            <a className="thread-title" href="#" onClick={() => dispatch(showSingle(props.thread.id))}><h3>{props.thread.title}</h3></a>
            <p>Author: {props.thread.author}</p>
            <p>{truncateBody()}</p>
            <p>Posted: {parseTimestamp(props.thread.timestamp)}</p>
        </div>
    );
};

export default ThreadSnippet;

ThreadSnippet.propTypes = {
    thread: PropTypes.object.isRequired
};