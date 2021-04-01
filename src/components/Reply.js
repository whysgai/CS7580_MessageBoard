import PropTypes from "prop-types";

const Reply = (props) => {

    const parseTimestamp = (seconds) => {
        let dateTime = new Date(seconds);
        console.log("Timestamp:", dateTime);
        // now we need to parse the time object into a string
        let timeStamp = dateTime.toLocaleDateString("en-US", { year: '2-digit', month: 'long', day: 'numeric' }) + " at " + dateTime.toLocaleTimeString("en-US", {timeZone: 'America/New_York', hourCycle: 'h24'});
        return timeStamp;
    };

    return (
        <>
            <p>Replier: {props.reply.author}</p>
            <p>Reply: {props.reply.body}</p>
            <p>Replied: {parseTimestamp(props.reply.timestamp)}</p>
        </>
    );
};

export default Reply;

Reply.propTypes = {
    reply: PropTypes.object.isRequired
};