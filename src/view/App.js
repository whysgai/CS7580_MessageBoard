import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreadList from '../components/ThreadList';
import ThreadComponent from "../components/ThreadComponent";
import { LOGIN_STATE, VIEW_STATE } from "../redux/storeConstants";
import { showLogin } from "../redux/actions/viewActions"
import { validateUser, logout } from "../redux/actions/loginActions";
import NewThread from "../components/NewThread";
import SearchTags from "../components/SearchTags";
import Login from "../components/Login";

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

    // useEffect(() => {
    //     dispatch(validateUser("originator", "1234"));
    // }, []);

    return (
        <div className="App container">
            {console.log("loginState equals", loginState)}
            {console.log("User equals", user)}
            {/* <p>hi { user !== null && user !== undefined ? user.id : "" }</p> */} 
            {
                view === VIEW_STATE.LOGIN ?
                    <Login />
                    :
                    <>
                        <nav className="navbar">{
                            loginState !== LOGIN_STATE.LOGGED_IN ?
                                <button className="btn btn-success heading-button" onClick={() => dispatch(showLogin())}>Log In</button>
                                :
                                <button className="btn btn-secondary heading-button" onClick={() => dispatch(logout())}>Log Out</button>
                        }</nav>
                        {
                            view === VIEW_STATE.THREAD_LIST ?
                                <>
                                    <SearchTags />
                                    <div className="card card-body list-group-flush">
                                        {
                                            loginState === LOGIN_STATE.LOGGED_IN ?
                                                <NewThread />
                                                :
                                                <div className="list-group-item">
                                                    <p>Want to join the conversation? <button className="btn btn-success" onClick={() => dispatch(showLogin())}>Log In</button></p>
                                                </div>
                                        }
                                        <ThreadList />
                                    </div>                        
                                </>                    
                                :
                                <>{
                                    view === VIEW_STATE.SINGLE_THREAD ?
                                        <ThreadComponent />
                                        :
                                        <p>Error: view set to {view}</p>                            
                                }</>
                        }
                    </>
            }            
        </div>
    );
}

export default App;
