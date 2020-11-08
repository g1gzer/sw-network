import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div className={s.intro}>
        <img src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png"></img>

        </div>
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
        <MyPosts/>

    </div>
}

export default Profile;