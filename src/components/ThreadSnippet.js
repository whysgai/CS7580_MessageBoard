import PropTypes from "prop-types";

const ThreadSnippet = (props) => {
    return (
        <div>
            <p>Title: {props.thread.title}</p>
            <p>Author: {props.thread.author}</p>
            <p>Body: {props.thread.body}</p>
        </div>
    );
};

export default ThreadSnippet;

ThreadSnippet.propTypes = {
    thread: PropTypes.object.isRequired
};