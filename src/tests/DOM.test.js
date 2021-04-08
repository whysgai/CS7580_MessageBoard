import React from "react";
import { _ } from "lodash";
import App from "../view/App";
import { render, fireEvent, screen } from "./testingUtils";
import { LOGIN_STATE, VIEW_STATE } from "../redux/storeConstants";
import { READ_THREADS } from "../redux/actionConstants";
import * as threadActions from "../redux/actions/threadActions";

const INITIAL_STATE = {
    loginState: LOGIN_STATE.LOGGED_OUT,
    view: VIEW_STATE.THREAD_LIST,
    user: -1,
    threads: [],
    singleId: "",
    searchTags: [],
    testState: true
};

const TEST_USER = {
    id: "001",
    username: "Dumont"
}

const SAMPLE_THREADS = [
    {
        id: "001",
        author: "Groucho",
        body: "Hail, hail Freedonia #tag #more-tag #honk",
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
                body: "honk honk #honk",
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
        body: "The password is: swordfish  #honk",
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
        title: "Horse Feathers"
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
    expect(screen.queryByText("Start a new thread")).toBeNull();
});

// When a logged in user creates a post it is displayed
test("Test that when a logged in user creates a post it is displayed in the feed", ()=>{
    const START_STATE = {
        ...INITIAL_STATE,
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_IN
        },
        view: VIEW_STATE.THREAD_LIST,
        user: _.cloneDeep(TEST_USER),
    };

    // Overwrite the getTodos action, which calls the mock data
    jest.spyOn(threadActions, "readAllThreads").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: _.cloneDeep(SAMPLE_THREADS)
        }
    }));

    render(<App/>, START_STATE);

    expect(screen.getByText("Start a new thread")).toBeTruthy();

    // get new post button
    const openForm = screen.getByText("Start a new thread");
    //fire event for new post button
    fireEvent.click(openForm);
    //check for new post form
    expect(screen.getByText("Post")).toBeTruthy();

    // get title
    const title = screen.getByPlaceholderText("Thread title");
    // get body
    const body = screen.getByPlaceholderText("Thread content");
    // get post button
    const postButton = screen.getByText("Post");
    //fire event to fill in title
    fireEvent.change(title, {target: {value: "New Test Title"}});
    //fire event to fill in body
    fireEvent.change(body, {target: {value: "Tenetur quaerat sit sed placeat similique. Inventore enim vitae est rerum magni. Quia unde deleniti qui sequi non modi perferendis. Quis temporibus hic quibusdam natus eligendi harum. Maxime delectus accusantium non. Veniam aut veniam odio blanditiis."}});
    
    let newThreads = _.cloneDeep(SAMPLE_THREADS);
    newThreads.push({
        author : START_STATE.user.username,
        body : body.value,
        replies : [],
        tags : [],
        timestamp : Date.now(),
        title : title.value
    });

    //spy on create new post
    jest.spyOn(threadActions, "createThread").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: newThreads
        }
    }));

    //fire event create new post
    fireEvent.click(postButton);

    //check for new post
    expect(screen.getByText("New Test Title")).toBeTruthy();
});

// Clicking tag searches for like tags
test("Test that clicking a tag searches for threads with that tag", ()=>{
    const START_STATE = {
        ...INITIAL_STATE,
        loginReducer : {
            loginState: LOGIN_STATE.LOGGED_IN
        },
        view: VIEW_STATE.THREAD_LIST,
        user: _.cloneDeep(TEST_USER),
    };

    // Overwrite the getTodos action, which calls the mock data
    jest.spyOn(threadActions, "readAllThreads").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: _.cloneDeep(SAMPLE_THREADS)
        }
    }));

    render(<App/>, START_STATE);

    expect(screen.getByText("Duck Soup")).toBeTruthy();
    expect(screen.getByText("Animal Crackers")).toBeTruthy();
    expect(screen.getByText("Horse Feathers")).toBeTruthy();

    // get honk link
    const honkTag = screen.getAllByText("#honk")[0];
    console.log("Honk tag", honkTag);

    let newThreads = _.cloneDeep(SAMPLE_THREADS);
    // jest spy readThreadById
    jest.spyOn(threadActions, "readThreadByTag").mockImplementation(() => ({
        type: READ_THREADS,
        payload: {
            threads: newThreads.filter(thread => thread.tags.includes("#honk"))
        }
    }));

    // fire honk click
    fireEvent.click(honkTag);    

    // expect duck soup and horse feathers
    expect(screen.getByText("Duck Soup")).toBeTruthy();
    expect(screen.getByText("Horse Feathers")).toBeTruthy();
    // expect animal crackers to be null
    expect(screen.queryByText("Animal Crackers")).toBeNull();
});