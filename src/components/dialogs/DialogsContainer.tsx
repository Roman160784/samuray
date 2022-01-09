import React, { ChangeEvent } from 'react';

import { sendMessgeAC, updateNewMessageBodyAC } from '../../redux/Dialogs-reducer';
import { actionType, AppRootStateType, store } from '../../redux/reduxStore';
import Dialogs from './Dialogs';
import { connect, useDispatch } from 'react-redux';



type DialogsType = {
  id: number
  name: string
}

type messagesType = {
  id: number
  message: string
}

type DialogsContainerMainType = {
  dialogs: Array<DialogsType>
  messages: Array<messagesType>
  store: AppRootStateType
  dispatch: (action: actionType) => void
}


const DialogsContainer = (props: DialogsContainerMainType) => {

  const dispatch = useDispatch()
  const state = store.getState()

  let newMessageBody = state.dialogPage.newMessageBody

  let onSendMessageClick = () => {
    dispatch(sendMessgeAC())
  }

  let updateNewMessageBody = (body: string) => {
    dispatch(updateNewMessageBodyAC(body))
  }

  return (
    <Dialogs dialogs={state.dialogPage.dialogs} messages={state.dialogPage.messages}
      store={state} updateNewMessageBody={updateNewMessageBody} sendMessge={onSendMessageClick} newMessageBody={newMessageBody} />
  )
}

export default DialogsContainer;


// let mapStateToProps = () => {

//   const state = store.getState()
//   return {
//     messages: state.dialogPage.messages,
//     dialogs: state.dialogPage.dialogs,
//     store: state,
//     newMessageBody : state.dialogPage.newMessageBody,
//   }
// }

// let mapDispatchToProps = () => {

//   const dispatch = useDispatch();
  
//   return {
//     updateNewMessageBody: (body : string) => {dispatch(updateNewMessageBodyAC(body))},
//     sendMessge: () => {dispatch(sendMessgeAC())},
//   }
// }

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



