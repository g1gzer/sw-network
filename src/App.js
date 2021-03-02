import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Users from "./Components/Users/Users";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <Route path='/Dialogs' render={ () => <DialogsContainer />}/>
                <Route path='/Profile' render={ () => <Profile />}/>
                <Route path='/Users' render={ () => <Users />}/>
            </div>
        </BrowserRouter>
    );
}


export default App;
