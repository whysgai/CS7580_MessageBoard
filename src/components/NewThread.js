import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createThread } from "../redux/actions/threadActions";

const NewThread = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        let newTags = body.split(" ").filter(word => word.charAt(0) === "#");
        setTags(newTags);
    }, [body]);

    const postThread = () => {
        let newThread = {
            author : user.id,
            body : body,
            replies : [],
            tags : tags,
            timestamp : Date.now(),
            title : title
        }
        dispatch(createThread(newThread));
        setTitle("");
        setBody("");
        setTags([]);
    };

    return (
        <>
            <p>Start a new thread</p>
            <div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="newThreadTitle" placeholder="Thread title"
                        value={title} onChange={e => setTitle(e.target.value)}
                    />
                    <label htmlFor="newThreadTitle">Thread title</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Thread content" id="newThreadBody"
                        value={body} onChange={e => setBody(e.target.value)}
                    />
                    <label htmlFor="newThreadBody">Thread content</label>
                </div>
                <button className="btn btn-success" onClick={() => postThread()}>Post</button>
            </div>
        </>
    );
};

export default NewThread;