import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";




let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData
    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
