import React from 'react';
import s from "../Dialogs.module.css";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../../Redux/dialogsReducer";



const DialogsInput = (props) => {


    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(addMessageActionCreator());
        newMessageElement.current.value = '';                // !!!!!!!
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
    <div className={s.input}>
        <textarea onChange={onMessageChange} ref={ newMessageElement } value={props.newMessageText}/>
        <button onClick={ addMessage }>Send</button>
    </div>
    );

}
export default DialogsInput;