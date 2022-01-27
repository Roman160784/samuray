import React, { ChangeEvent } from 'react';
import { ActionsDialogsType, sendMessgeAC, updateNewMessageBodyAC } from '../../redux/Dialogs-reducer';
import { actionType, AppRootStateType, Dispathc, store } from '../../redux/reduxStore';
import Dialogs from './Dialogs';
import { connect,} from 'react-redux';

import { DialogsType } from '../../redux/state';




type messagesType = {
  id: number
  message: string
}

type MSTP = {
  messages: Array<messagesType>
  dialogs:  Array<DialogsType>
  store: AppRootStateType
  newMessageBody: string
}

type MDTP ={
  sendMessge: () => void
  updateNewMessageBody: (body : string) => void
}

let mapStateToProps = (state: AppRootStateType): MSTP => ({
    messages: state.dialogPage.messages,
    dialogs: state.dialogPage.dialogs,
    store: state,
    newMessageBody : state.dialogPage.newMessageBody,
  })


let mapDispatchToProps = (dispatch: Dispathc) : MDTP => ({
    updateNewMessageBody: (body : string) => dispatch(updateNewMessageBodyAC(body)),
    sendMessge: () => dispatch(sendMessgeAC()),
  })


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



