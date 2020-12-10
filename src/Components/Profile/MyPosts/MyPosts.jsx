import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';


const MyPosts = (props) => {


    let postElements = props.postData.map(post => <Post userName={post.userName} message={post.message} likeCount={post.likeCount}/>);


    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={s.posts}>
            <div className={s.title}>My posts</div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={ addPost }>Add post</button>
            <div className={s.items}>
                {postElements}


            </div>


        </div>
    )
}

export default MyPosts;