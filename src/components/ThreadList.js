import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { readThreads } from "../redux/actions/threadActions";
import ThreadComponent from "./ThreadComponent";

const ThreadList = () => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    // const user = useSelector(state => state.user);

    useEffect(() => {
        if (loginState === LOGIN_STATE.LOGGED_IN) {
            dispatch(readThreads());
        }
    });

    return (
        <>
            <p>Threads: </p>
            <ThreadComponent />
        </>
    );
};

export default ThreadList;