

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
            let newMessage = {id: 6, text: state.newMessageText,};
            return {                                                      // stateCopy
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''

            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {                                                      // stateCopy
                ...state,
                newMessageText: action.messageText
            }
    }
    return state;
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', messageText: text});

export default dialogsReducer;