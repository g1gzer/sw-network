import React from 'react';
import s from "../Dialogs.module.css";




const DialogsInput = (props) => {


    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
        newMessageElement.current.value = '';
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }

    return (
    <div className={s.input}>
        <textarea onChange={onMessageChange} ref={ newMessageElement } value={props.newMessageText}/>
        <button onClick={ addMessage }>Send</button>
    </div>
    );

}
export default DialogsInput;