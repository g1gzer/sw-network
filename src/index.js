import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Provider} from "react-redux";



    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>,
        document.getElementById('root')
    );








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
