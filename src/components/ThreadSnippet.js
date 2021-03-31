import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showSingle } from "../redux/actions/viewActions"

const ThreadSnippet = (props) => {
    const dispatch = useDispatch();

    return (
        <div>
            {console.log("thread", props.thread)}
            <a href="#" onClick={() => dispatch(showSingle(props.thread.id))}>Title: {props.thread.title}</a>
            <p>Author: {props.thread.author}</p>
            <p>Body: {props.thread.body}</p>
            {/* <p>Created: {props.thread.timestamp.seconds}</p> */}
        </div>
    );
};

export default ThreadSnippet;

ThreadSnippet.propTypes = {
    thread: PropTypes.object.isRequired
};