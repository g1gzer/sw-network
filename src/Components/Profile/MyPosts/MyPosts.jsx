import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';


const MyPosts = () => {
    return <div className={s.posts}>
        <div className={s.title}>My posts</div>
        <textarea></textarea>
        <button>Add post</button>
        <div className={s.items}>
            <Post message='Hi, how are you?' likeCount='♡ 15'/>
            <Post message="Lol it's my first post" likeCount='♡ 21'/>


        </div>


    </div>

}

export default MyPosts;