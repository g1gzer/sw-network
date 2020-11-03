import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <ul className={s.nav__inner}>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li>Settings</li>
        </ul>
    </nav>
}

export default Navbar;