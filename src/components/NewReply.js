import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReply } from "../redux/actions/threadActions";

const NewReply = (props) => {
    const [body, setBody] = useState("");
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const postReply = () => {
        let newThread = {
            author : user.id,
            body : body,
            timestamp : Date.now()
        }
        dispatch(createReply(props.threadId, newThread));
        setBody("");
    };

    return (
        <>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Reply" id="newReplyBody"
                    value={body} onChange={e => setBody(e.target.value)}
                />
                <label htmlFor="newReplyBody">Reply content</label>
            </div>
            <button className="btn btn-success" onClick={() => postReply()} disabled={body === "" ? true : false}>Post</button>
        </>
    );
};

export default NewReply;

NewReply.propTypes = {
    threadId: PropTypes.string.isRequired
};