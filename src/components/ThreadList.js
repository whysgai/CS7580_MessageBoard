import { useSelector } from "react-redux";
import ThreadSnippet from "./ThreadSnippet";

const ThreadList = () => {
    const threads = useSelector(state => state.threads);

    return (
        <>
            {
                threads.length > 0 ?
                    threads.map((thread, index) => 
                        <ThreadSnippet key={index} thread={thread}/>
                    )
                    :
                    <p>No threads to display.</p>
            }
            
        </>
    );
};

export default ThreadList;