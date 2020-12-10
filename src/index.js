import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



export let rerenderEntireTree = (props) => {
    ReactDOM.render(
        <Router>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </Router>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree); // Callback to state


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
