import React from 'react';
import s from "../Dialogs.module.css";



const DialogsInput = (props) => {


    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }


    return (
    <div className={s.input}>
        <textarea ref={ newMessageElement }></textarea>
        <button onClick={ sendMessage }>Send</button>
    </div>
    )

}
export default DialogsInput;