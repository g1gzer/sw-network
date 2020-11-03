import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div className={s.header__logo}>
        <img src='https://www.flaticon.com/svg/static/icons/svg/842/842184.svg'></img>
        </div>
    </header>
}

export default Header;