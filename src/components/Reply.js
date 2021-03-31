import PropTypes from "prop-types";

const Reply = (props) => {
    return (
        <>
            <p>Replier: {props.reply.author}</p>
            <p>Reply: {props.reply.body}</p>
        </>
    );
};

export default Reply;

Reply.propTypes = {
    reply: PropTypes.object.isRequired
};