import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreadList from '../components/ThreadList';
import ThreadComponent from "../components/ThreadComponent";
import { LOGIN_STATE, VIEW_STATE } from "../redux/storeConstants";
import { showLogin } from "../redux/actions/viewActions"
import { validateUser } from "../redux/actions/loginActions";
import NewThread from "../components/NewThread";
import SearchTags from "../components/SearchTags";

function App() {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    const user = useSelector(state => state.user);
    const view = useSelector(state => state.viewReducer.view);

    // useEffect(() => {
    //     console.log("loginState", loginState);
    //     if (loginState === LOGIN_STATE.LOGGED_IN) {
    //         dispatch(validateUser("originator", "1234"));
    //     }
    // }, [loginState]);

    useEffect(() => {
        dispatch(validateUser("originator", "1234"));
    }, []);

    return (
        <div className="App container">
            <p>hi { user !== null && user !== undefined ? user.id : "" }</p>
            {
                view === VIEW_STATE.THREAD_LIST ?
                    <>
                        <SearchTags />
                        <div className="card card-body list-group-flush">
                            {
                                loginState === LOGIN_STATE.LOGGED_IN ?
                                    <NewThread />
                                    :
                                    <>
                                        <button className="btn btn-success" onClick={() => dispatch(showLogin())}>Log In</button>
                                    </>
                            }
                            <ThreadList />
                        </div>                        
                    </>                    
                    :
                    <>{
                        view === VIEW_STATE.SINGLE_THREAD ?
                            <ThreadComponent />
                            :
                            <>{
                                view === VIEW_STATE.LOGIN ?
                                    <>
                                        <p>Login component here</p>
                                    </>
                                    :
                                    <p>Error: view set to {view}</p>
                            }</>
                            
                    }</>
            }
            
        </div>
    );
}

export default App;
