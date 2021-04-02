import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readThreadByTag } from "../redux/actions/threadActions";

const SearchTags = () => {
    const [search, setSearch] = useState(state => state.viewReducer.searchTags);
    const [searchTags, setSearchTags] = useState([]);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        let newTags = search.split(" ").map(word => word.charAt(0) !== "#" ? "#" + word : word);
        setSearchTags(newTags);
        console.log("Set new tags", newTags);
    }, [search]);

    const submitSearch = () => {
        // let newThread = {
        //     author : user.id,
        //     body : body,
        //     timestamp : Date.now()
        // }
        console.log("Search for", searchTags);
        // dispatch(readThreadByTag(searchTags));
        // setSearch("");
    };


    return (
        <>
            <div class="form-floating mb-3">
                <input type="text" className="form-control" placeholder="Search tags" id="tagSearch"
                    value={search} onChange={e => setSearch(e.target.value)}
                />
                <label for="tagSearch">Search tags</label>
            </div>
            <button className="btn btn-success" onClick={() => submitSearch()}>Search</button>
        </>
    );
};

export default SearchTags;