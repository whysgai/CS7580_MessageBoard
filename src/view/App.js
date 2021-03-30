import { useEffect } from "react";
import ThreadList from '../components/ThreadList';
import '../styles/App.css';

function App() {

    useEffect(() => {

    }, []);

    return (
        <div className="App">
            <p>hi</p>
            <ThreadList />
        </div>
    );
}

export default App;
