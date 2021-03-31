import {useState, useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const NewThread = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        let newTags = body.split(" ").filter(word => word.charAt(0) === "#");
        console.log("New tags:", newTags);
    }, [body]);


    const postThread = () => {
        
    };



    return (
        <>
            <p>Start a new thread</p>
            <div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="newThreadTitle" placeholder="Thread title"
                        value={title} onChange={e => setTitle(e.target.value)}
                    />
                    <label for="newThreadTitle">Thread title</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Thread content" id="newThreadBody"
                        value={body} onChange={e => setBody(e.target.value)}
                    />
                    <label for="newThreadBody">Thread content</label>
                </div>
                <button className="btn btn-success">Post</button>
            </div>
        </>
    );
};

export default NewThread;