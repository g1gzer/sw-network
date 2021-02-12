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
import DialogsContainer from "./Components/Dialogs/DialogsContainer";



const App = (props) => {

    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <Route path='/Dialogs' render={ () => <DialogsContainer />}/>
                <Route path='/Profile' render={ () => <Profile />}/>
            </div>
        </Router>
    );
}


export default App;
