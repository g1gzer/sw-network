import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <DialogItem name='Andryusha' id='1'/>
                <DialogItem name='Sergey' id='2'/>
                <DialogItem name='Tatiana' id='3'/>
                <DialogItem name='Kolya' id='4'/>
                <DialogItem name='Ilya' id='5'/>

            </div>
            <div className={s.messages}>
                <Message message='Hi Dude!'/>
                <Message message='Hi! my friend!'/>
            </div>
        </div>
    )
}

export default Dialogs;