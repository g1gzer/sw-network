import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";


const Profile = () => {
    return <div className={s.content}>
        <div className={s.intro}>
        <img src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png"></img>
        </div>
        <UserInfo/>
        <MyPosts/>

    </div>
}

export default Profile;