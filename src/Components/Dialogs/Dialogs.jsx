import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogsItems from "./DialogsItems/DialogsItems";
import DialogsInput from "./DialogsInput/DialogsInput";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogsItems userImage={dialog.userImage}
                                                                            name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messagesData.map(message => <Message text={message.text} id={message.id}/>);

    return (
        <div className={s.content}>
            <div className={s.dialogs}>

                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messagesElements}


            </div>
            <DialogsInput state={props.dialogsPage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialogs;