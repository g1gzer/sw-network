import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItems from "./DialogsItems/DialogsItems";
import DialogsInputContainer from "./DialogsInput/DialogsInputContainer";
const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <DialogsItems userImage={dialog.userImage}
                                                                            name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = props.messagesData.map(message => <Message text={message.text} key={message.id} id={message.id}/>);

    return (
        <div className={s.content}>
            <div className={s.dialogs}>

                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messagesElements}


            </div>
            <DialogsInputContainer />
        </div>
    )
}

export default Dialogs;