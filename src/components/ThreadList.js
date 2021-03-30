import ThreadComponent from "./ThreadComponent";

const ThreadList = () => {
    // const dispatch = useDispatch();
    // const loginState = useSelector(state => state.loginReducer.loginState);
    // const user = useSelector(state => state.user);

    // useEffect(() => {
    //     // if (loginState === LOGIN_STATE.LOGGED_OUT) {
    //     //     dispatch(validateUser("originator", "1234"));
    //     // }
    // });

    return (
        <>
            <p>Threads: </p>
            <ThreadComponent />
        </>
    );
};

export default ThreadList;