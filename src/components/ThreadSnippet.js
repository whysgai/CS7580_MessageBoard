import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showSingle } from "../redux/actions/viewActions";
import { parseTimestamp } from "../redux/actions/threadActions";

const ThreadSnippet = (props) => {
    const dispatch = useDispatch();

    const parseTimestamp = (seconds) => {
        let dateTime = new Date(seconds);
        console.log("Timestamp:", dateTime);
        // now we need to parse the time object into a string
        let timeStamp = dateTime.toLocaleDateString("en-US", { year: '2-digit', month: 'long', day: 'numeric' }) + " at " + dateTime.toLocaleTimeString("en-US", {timeZone: 'America/New_York', hourCycle: 'h24'});
        return timeStamp;
    };

    return (
        <div>
            {console.log("thread", props.thread)}
            <a href="#" onClick={() => dispatch(showSingle(props.thread.id))}>Title: {props.thread.title}</a>
            <p>Author: {props.thread.author}</p>
            <p>Body: {props.thread.body}</p>
            <p>Posted: {parseTimestamp(props.thread.timestamp)}</p>
        </div>
    );
};

export default ThreadSnippet;

ThreadSnippet.propTypes = {
    thread: PropTypes.object.isRequired
};