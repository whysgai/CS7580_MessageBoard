import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showSingle } from "../redux/actions/viewActions"

const ThreadSnippet = (props) => {
    const dispatch = useDispatch();

    const parseTimestamp = (seconds) => {
        let timestamp = new Date(seconds);
        console.log("Timestamp:", timestamp);
        // now we need to parse the time object into a string
        return "hey";
    }

    return (
        <div>
            {console.log("thread", props.thread)}
            <a href="#" onClick={() => dispatch(showSingle(props.thread.id))}>Title: {props.thread.title}</a>
            <p>Author: {props.thread.author}</p>
            <p>Body: {props.thread.body}</p>
            <p>Created: {parseTimestamp(props.thread.timestamp)}</p>
        </div>
    );
};

export default ThreadSnippet;

ThreadSnippet.propTypes = {
    thread: PropTypes.object.isRequired
};