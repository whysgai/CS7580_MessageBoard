import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreadList from '../components/ThreadList';
import '../styles/App.css';
import {LOGIN_STATE} from "../redux/storeConstants";
import { validateUser } from "../redux/actions/loginActions"

function App() {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer.loginState);
    const user = useSelector(state => state.userReducer.user);

    useEffect(() => {
        if (loginState === LOGIN_STATE.LOGGED_OUT) {
            dispatch(validateUser("originator", "1234"));
        }
    });

    return (
        <div className="App">
            <p>hi { user !== null && user !== undefined ? user.id : "" }</p>
            <ThreadList />
        </div>
    );
}

export default App;