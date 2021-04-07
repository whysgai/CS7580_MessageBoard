import React from "react";
import { _ } from "lodash";
import App from "../view/App";
import { render, fireEvent, screen } from "./testingUtils";
import { LOGIN_STATE, VIEW_STATE } from "../redux/storeConstants";
import { READ_THREADS } from "../redux/actionConstants";
import * as loginActions from "../redux/actions/loginActions";
import * as threadActions from "../redux/actions/threadActions";
import { readThreads } from "../redux/actions/threadActions"
import * as viewActions from "../redux/actions/viewActions";

const INITIAL_STATE = {
    loginState: LOGIN_STATE.LOGGED_OUT,
    view: VIEW_STATE.THREAD_LIST,
    user: -1,
    threads: [],
    singleId: "",
    searchTags: [],
    testState: true
};

const SAMPLE_THREADS = [
    {
        id: "001",
        author: "Groucho",
        body: "Hail, hail Freedonia",
        replies: [],
        tags: ["#tag", "#more-tag", "#honk"],
        timestamp: 1617569322,
        title: "Duck Soup"
    },
    {
        id: "002",
        author: "Chico",
        body: "One morning, I shot an elephant in my pajamas. How it got into my pajamas, I'll never know.",
        replies: [
            {
                id: "021",
                author: "Harpo",
                body: "#honk",
                timestamp: 1617569453
            }
        ],
        tags: [],
        timestamp: 1617569393,
        title: "Animal Crackers"
    },
    {
        id: "003",
        author: "Harpo",
        body: "The password is: swordfish",
        replies: [
            {
                id: "031",
                author: "Groucho",
                body: "That's not a bad idea. I tell you what... I'll consult my lawyer. And if he advises me to do it, I'll get a new lawyer.",
                timestamp: 1617569453
            }
        ],
        tags: ["#honk"],
        timestamp: 1617569393,
        title: "Horse feathers"
    }
];

// Users that are not logged in can see threads but not post threads
test("Test that when users are not logged in, they can see threads but not post threads", ()=>{
    const START_STATE = _.cloneDeep(INITIAL_STATE);

   // Overwrite the getTodos action, which calls the mock data
    jest.spyOn(threadActions, "readAllThreads").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: _.cloneDeep(SAMPLE_THREADS)
        }
    }));

    render(<App/>, START_STATE);

    // expect(screen.getByText("Do something")).toBeTruthy();
    expect(screen.getByText("Author: Groucho")).toBeTruthy();
});

// When a logged in user creates a post it is displayed
test.skip("Test that when a logged in user creates a post it is displayed in the feed", ()=>{});
// Clicking tag searches for like tags
test.skip("Test that clicking a tag searches for threads with that tag", ()=>{});