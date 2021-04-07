import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { readAllThreads, readThreadByTag } from "../redux/actions/threadActions";

const SearchTags = () => {
    const stateSearchTags = useSelector(state => state.viewReducer.searchTags);
    const loginState = useSelector(state => state.loginReducer.loginState);
    const testState = useSelector(state => state.testState);


    const [search, setSearch] = useState("");
    console.log("Search now equals", search);
    const [searchTags, setSearchTags] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(readAllThreads());   
    }, [dispatch]);

    // useEffect(() => {
    //     console.log("testState", testState);
    //     if (!testState) {
    //         dispatch(readAllThreads());
    //     }        
    // }, [dispatch]);

    // useEffect(() => {
    //     if (loginState === LOGIN_STATE.LOGGED_IN) {
    //         dispatch(readAllThreads());
    //     }
    // }, [loginState, dispatch]);

    useEffect(() => {
        if (search !== "") {
            let newTags = search.split(" ").map(word => word.charAt(0) !== "#" ? "#" + word : word);
            setSearchTags(newTags);
            console.log("Set new tags", newTags);
        }        
    }, [search]);

    useEffect(() => {
        let tagString = "";
        for(let tag of stateSearchTags) {
            tagString = tagString + tag + "";
        };
        if (tagString !== "") {
            setSearch(tagString);
            let newTags = tagString.split(" ").map(word => word.charAt(0) !== "#" ? "#" + word : word);
            setSearchTags(newTags);
            dispatch(readThreadByTag(newTags));
        }
    }, [stateSearchTags, dispatch])

    const submitSearch = () => {
        if (search === "") {
            searchAll();
        } else {
            dispatch(readThreadByTag(searchTags));
        }        
    };

    const searchAll = () => {
        setSearch("");
        dispatch(readAllThreads());
    };

    const handleKeyPress = event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            submitSearch();
        }
    };

    return (
        <>
            <div className="form-floating input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by tags" id="tagSearch"
                    value={search} onChange={e => setSearch(e.target.value)} onKeyUp={e => handleKeyPress(e)}
                />
                <label htmlFor="tagSearch">Search threads by tag</label>
                {
                    search !== "" ?
                        <button className="btn btn-outline-secondary" onClick={() => searchAll()}>X</button>
                        :
                        <></>
                }                
                <button className="btn btn-outline-success" onClick={() => submitSearch()}>Search</button>
            </div>            
        </>
    );
};

export default SearchTags;