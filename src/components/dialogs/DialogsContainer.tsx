import React, { ChangeEvent } from 'react';
import { ActionsDialogsType, sendMessgeAC, updateNewMessageBodyAC } from '../../redux/Dialogs-reducer';
import { actionType, AppRootStateType, Dispathc, store } from '../../redux/reduxStore';
import Dialogs from './Dialogs';
import { connect,} from 'react-redux';

import { DialogsType } from '../../redux/state';



// type DialogsType = {
//   id: number
//   name: string
// }

// type messagesType = {
//   id: number
//   message: string
// }

// type DialogsContainerMainType = {
//   dialogs: Array<DialogsType>
//   messages: Array<messagesType>
//   store: AppRootStateType
//   dispatch: (action: actionType) => void
// }


// const DialogsContainer = (props: DialogsContainerMainType) => {

//   const dispatch = useDispatch()
//   const state = store.getState()

//   let newMessageBody = state.dialogPage.newMessageBody

//   let onSendMessageClick = () => {
//     dispatch(sendMessgeAC())
//   }

//   let updateNewMessageBody = (body: string) => {
//     dispatch(updateNewMessageBodyAC(body))
//   }

//   return (
//     <Dialogs dialogs={state.dialogPage.dialogs} messages={state.dialogPage.messages}
//       store={state} updateNewMessageBody={updateNewMessageBody} sendMessge={onSendMessageClick} newMessageBody={newMessageBody} />
//   )
// }

// export default DialogsContainer;

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



