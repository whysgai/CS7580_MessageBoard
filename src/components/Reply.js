import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showList } from "../redux/actions/viewActions";

const Reply = (props) => {
    const dispatch = useDispatch();

    const parseTimestamp = (seconds) => {
        let dateTime = new Date(seconds);
        // now we need to parse the time object into a string
        let timeStamp = dateTime.toLocaleDateString("en-US", { year: '2-digit', month: 'long', day: 'numeric' }) + " at " + dateTime.toLocaleTimeString("en-US", {timeZone: 'America/New_York', hourCycle: 'h24'});
        return timeStamp;
    };

    const parseTags = (rawBody) => {
        let parsedBody =  rawBody.split(" ").map(word => 
            word.charAt(0) === "#" ?
                <a className="tag" href="#" onClick={() => dispatch(showList(word))}>{word}</a>
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
        <div className="list-group-item">
            <p>Author: {props.reply.author}</p>
            <p>{parseTags(props.reply.body)}</p>
            <p>Replied: {parseTimestamp(props.reply.timestamp)}</p>
        </div>
    );
};

export default Reply;

Reply.propTypes = {
    reply: PropTypes.object.isRequired
};