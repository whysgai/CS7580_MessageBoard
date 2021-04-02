import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readThreadByTag } from "../redux/actions/threadActions";

const SearchTags = () => {
    // const stateSearchTags = useSelector(state => state.viewReducer.searchTags);
    // console.log("State search tags", stateSearchTags);
    // let tagString = "";
    // for(let tag of stateSearchTags) {
    //     tagString = tagString + tag + "";
    // }
    // console.log("Tag string", tagString);
    // const [search, setSearch] = useState(tagString);
    const [search, setSearch] = useState("");
    // console.log("Search now equals", search);
    const [searchTags, setSearchTags] = useState([]);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        let newTags = search.split(" ").map(word => word.charAt(0) !== "#" ? "#" + word : word);
        setSearchTags(newTags);
        console.log("Set new tags", newTags);
    }, [search]);

    const submitSearch = () => {
        console.log("Search for", searchTags);
        dispatch(readThreadByTag(searchTags));
    };


    return (
        <>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" placeholder="Search tags" id="tagSearch"
                    value={search} onChange={e => setSearch(e.target.value)}
                />
                <label htmlFor="tagSearch">Search tags</label>
            </div>
            <button className="btn btn-success" onClick={() => submitSearch()}>Search</button>
        </>
    );
};

export default SearchTags;