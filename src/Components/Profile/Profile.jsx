import React from 'react';
import s from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div className={s.content}>
        <div className={s.intro}>
        <img src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png"></img>
        </div>
        <UserInfo/>
        <MyPostsContainer />

    </div>
}

export default Profile;