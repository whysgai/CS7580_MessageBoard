import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_STATE } from "../redux/storeConstants";
import { readAllThreads, readThreadByTag } from "../redux/actions/threadActions";

const SearchTags = () => {
    const stateSearchTags = useSelector(state => state.viewReducer.searchTags);
    const loginState = useSelector(state => state.loginReducer.loginState);


    const [search, setSearch] = useState("");
    console.log("Search now equals", search);
    const [searchTags, setSearchTags] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Thread List state search tags", stateSearchTags);
        if (loginState === LOGIN_STATE.LOGGED_IN) {
            dispatch(readAllThreads());
        }
    }, [loginState]);

    useEffect(() => {
        if (search !== "") {
            let newTags = search.split(" ").map(word => word.charAt(0) !== "#" ? "#" + word : word);
            setSearchTags(newTags);
            console.log("Set new tags", newTags);
        }        
    }, [search]);

    useEffect(() => {

        console.log("State search tags", stateSearchTags);
        let tagString = "";
        for(let tag of stateSearchTags) {
            tagString = tagString + tag + "";
        };
        console.log("Tag string", tagString);
        if (tagString !== "") {
            

            setSearch(tagString);
            let newTags = tagString.split(" ").map(word => word.charAt(0) !== "#" ? "#" + word : word);
            setSearchTags(newTags);
            console.log("Set new tags", newTags);
            dispatch(readThreadByTag(newTags));
        }
    }, [stateSearchTags])

    const submitSearch = () => {
        if (search === "") {
            searchAll();
        } else {
            console.log("Search for", searchTags);
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
            <div className="form-floating mb-3">
                <input type="text" className="form-control" placeholder="Search tags" id="tagSearch"
                    value={search} onChange={e => setSearch(e.target.value)} onKeyUp={e => handleKeyPress(e)}
                />
                <label htmlFor="tagSearch">Search tags</label>
            </div>
            <button className="btn btn-success" onClick={() => submitSearch()}>Search</button>
            <button className="btn btn-info" onClick={() => searchAll()}>All</button>
        </>
    );
};

export default SearchTags;