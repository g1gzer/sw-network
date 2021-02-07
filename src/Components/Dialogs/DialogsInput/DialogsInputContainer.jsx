import React from 'react';

import MyPosts from "./MyPosts";



const DialogsContainer = (props) => {

    let state = props.store;

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (

        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.postData}
                 newPostText={state.newPostText}/>
    )
}

export default DialogsContainer;