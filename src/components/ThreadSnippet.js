import PropTypes from "prop-types";

const ThreadSnippet = (props) => {

    return (
        <div>
            {console.log("thread", props.thread)}
            <a href="#" >Title: {props.thread.title}</a>
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