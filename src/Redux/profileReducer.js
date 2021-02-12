


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData:[
        {id: 1, userName: 'Special Spirit', message: 'Hi, how are you!', likeCount: '♡ 15'},
        {id: 2, userName: 'Gordon Freeman', message: 'Lol it\'s my first post', likeCount: '♡ 22'},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    // Posts
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                userName: 'Gordon Freeman',
                message: state.newPostText,
                likeCount: "♡ 22",
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
    }

    return state;
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextActionCreator = (text) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text});

export default profileReducer;