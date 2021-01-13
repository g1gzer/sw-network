

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    // Messages

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 5, text: state.newMessageText,};
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            break;
    }
    return state;
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', messageText: text});

export default dialogsReducer;