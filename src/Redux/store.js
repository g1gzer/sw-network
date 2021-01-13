
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


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
            newMessageText: '',
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.profilePage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }

};





export default store;
window.store = store;