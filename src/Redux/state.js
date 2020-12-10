let store = {
    _state: {
        profilePage: {
            postData:[
                {id: 1, userName: 'Special Spirit', message: 'Hi, how are you!', likeCount: '♡ 15'},
                {id: 2, userName: 'Gordon Freeman', message: 'Lol it\'s my first post', likeCount: '♡ 22'},
            ],
            newPostText: '',
        },

        dialogsPage: {
            messagesData:[
                {id: 1, text: 'Hi Dude!'},
                {id: 2, text: 'Hi! my friend!'},
                {id: 3, text: 'Problem?'},
                {id: 4, text: 'Anime?'},
                {id: 5, text: 'Thanks:)'},
            ],
            dialogsData:[
                {id: 1, userImage: "https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg", name: 'Andryusha'},
                {id: 2, userImage: "https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg", name: 'Sergey'},
                {id: 3, userImage: "https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg", name: 'Tatiana'},
                {id: 4, userImage: "https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg", name: 'Kolya'},
                {id: 5, userImage: "https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg", name: 'Ilya'},
            ],
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {           //Callback
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id:3,
                userName: 'Gordon Freeman',
                message: this._state.profilePage.newPostText,
                likeCount: "♡ 22",
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    },

};





export default store;
window.store = store;