import React from 'react';

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import DialogsInput from "./DialogsInput";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return {
        newMessageText: state.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}
const DialogsInputContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsInput);

export default DialogsInputContainer;