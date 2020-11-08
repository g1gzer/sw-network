import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
            <img src="https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg"></img>
            <div>
                {props.message}
            </div>
            <div>
                {props.likeCount}
            </div>
        </div>


}

export default Post;