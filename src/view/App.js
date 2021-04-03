import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreadList from '../components/ThreadList';
import ThreadComponent from "../components/ThreadComponent";
// import '../styles/App.css';
import { LOGIN_STATE, VIEW_STATE } from "../redux/storeConstants";
import { validateUser } from "../redux/actions/loginActions"
import NewThread from "../components/NewThread";
import SearchTags from "../components/SearchTags";

function App() {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    const user = useSelector(state => state.user);
    const view = useSelector(state => state.viewReducer.view);

    useEffect(() => {
        if (loginState === LOGIN_STATE.LOGGED_OUT) {
            dispatch(validateUser("originator", "1234"));
        }
    });

    return (
        <div className="App container">
            {/* {console.log("Current state", state)} */}
            {console.log("Login state", loginState)}
            {console.log("Current user", user)}
            {console.log("Current view", view)}
            <p>hi { user !== null && user !== undefined ? user.id : "" }</p>
            {
                view === VIEW_STATE.THREAD_LIST ?
                    <>
                        <SearchTags />
                        <NewThread />
                        <ThreadList />
                    </>
                    
                    :
                    <>{
                        view === VIEW_STATE.SINGLE_THREAD ?
                            <ThreadComponent />
                            :
                            <p>Error: view set to {view}</p>
                    }</>
            }
            
        </div>
    );
}

export default App;
