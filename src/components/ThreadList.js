import { useSelector } from "react-redux";
import ThreadSnippet from "./ThreadSnippet";

const ThreadList = () => {
    const threads = useSelector(state => state.threads);

    return (
        <>
            {
                threads.map((thread, index) => 
                    <ThreadSnippet key={index} thread={thread}/>
                )
            }
            
        </>
    );
};

export default ThreadList;