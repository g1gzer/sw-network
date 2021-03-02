import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <ul className={s.nav__inner}>
            <li>
                <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
            </li>
            <li>
                <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
            </li>
            <li>
                <a>Settings</a>
            </li>
            <li>
                <a>News</a>
            </li>
            <li>
                <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;