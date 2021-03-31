import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
        //dispatch(createThread(props.threadId, newThread));
    };

    return (
        <>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Reply" id="newReplyBody"
                    value={body} onChange={e => setBody(e.target.value)}
                />
                <label for="newReplyBody">Reply content</label>
            </div>
            <button className="btn btn-success" onClick={() => postReply()}>Post</button>
        </>
    );
};

export default NewReply;

NewReply.propTypes = {
    threadId: PropTypes.string.isRequired
};