import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {updateNewPostText} from "./Redux/state";


const App = (props) => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <Route path='/Dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />}/>
                <Route path='/Profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                               dispatch={props.dispatch}
                />}/>
            </div>
        </Router>
    );
}


export default App;
