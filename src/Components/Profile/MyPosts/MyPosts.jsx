import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';




const MyPosts = (props) => {


    let postItems = props.posts.map(post => <Post id={post.id} key={post.id} userName={post.userName} message={post.message} likeCount={post.likeCount}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.posts}>
            <div className={s.title}>My posts</div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={ onAddPost }>Add post</button>
            <div className={s.items}>
                {postItems}


            </div>


        </div>
    )
}

export default MyPosts;