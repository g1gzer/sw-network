import React from 'react';
import s from './UserInfo.module.css';

const UserInfo = (props) => {
    return (
        <div className={s.user__info}>
            <img src='https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg'></img>
            <ul className={s.info__inner}>
                <li>Serjio J.K.</li>
                <li>Date of Birth:</li>
                <li>City:</li>
                <li>Education</li>
                <li>Web site:</li>
            </ul>
        </div>
    )
}
export default UserInfo;