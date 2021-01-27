import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";



const MyPosts = (props) => {


    let postItems= props.state.postData.map(post => <Post id={post.id} userName={post.userName} message={post.message} likeCount={post.likeCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.posts}>
            <div className={s.title}>My posts</div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText}/>
            <button onClick={ addPost }>Add post</button>
            <div className={s.items}>
                {postItems}


            </div>


        </div>
    )
}

export default MyPosts;