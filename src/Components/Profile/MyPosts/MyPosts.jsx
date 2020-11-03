import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return <div className={s.posts}>
            <div>My posts</div>
        <textarea></textarea>
        <button>Add post</button>
        <div className={s.item}>
            <img src="https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg"></img>
            <div>
                Post2
            </div>
        </div>
        


        </div>

}

export default MyPosts;