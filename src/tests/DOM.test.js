import React from "react";
import App from "../App";
import { render, fireEvent, screen } from "./testingUtils";
import {} from "../redux/storeConstants";
import {} from "../redux/actionConstants";
import * as actions from "../redux/actions";

// Users that are not logged in can see threads but not post threads
test.skip("Test that when users are not logged in, they can see threads but not post threads", ()=>{});

// When a logged in user creates a post it is displayed
test.skip("Test that when a logged in user creates a post it is displayed in the feed", ()=>{});
// Clicking tag searches for like tags
test.skip("Test that clicking a tag searches for threads with that tag", ()=>{});