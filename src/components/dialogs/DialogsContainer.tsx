import React, { ChangeEvent } from 'react';
import {  sendMessgeAC } from '../../redux/Dialogs-reducer';
import { AppRootStateType, Dispathc } from '../../redux/reduxStore';
import Dialogs from './Dialogs';
import { connect,} from 'react-redux';

import { DialogsType, MessagePageType } from '../../redux/state';
import { WithAuthRedirectComponent } from '../../hoc/WithAuthComonent';
import { compose } from 'redux';



type messagesType = {
  id: number
  message: string
}

type MSTP = {
  // isAuth: boolean
  dialogPage: MessagePageType
  messages: Array<messagesType>
  dialogs:  Array<DialogsType>
  store: AppRootStateType
  newMessageBody: string
}



type MDTP ={
  sendMessge: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppRootStateType): MSTP => ({
    // isAuth: state.authReducer.isAuth,
    dialogPage: state.dialogPage,
    messages: state.dialogPage.messages,
    dialogs: state.dialogPage.dialogs,
    store: state,
    newMessageBody : state.dialogPage.newMessageBody,
  })


let mapDispatchToProps = (dispatch: Dispathc) : MDTP => ({
    sendMessge: (newMessageBody: string) => dispatch(sendMessgeAC(newMessageBody)),
  })



//  const DialogsContainer = (props : DialogsContainerPropsType) => {
// return (
//   <div><Dialogs dialogs={props.dialogs} messages={[]} newMessageBody={''} sendMessge={function (): void {
//     throw new Error('Function not implemented.');
//   } } updateNewMessageBody={function (body: string): void {
//     throw new Error('Function not implemented.');
//   } } {...props}/></div>
// )
//  }

// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   WithAuthRedirectComponent
// ) (Dialogs)

//   let AuthRedirectComponent = WithAuthRedirectComponent(Dialogs)

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

 const DialogsContainer = compose <React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirectComponent
) (Dialogs)

export default DialogsContainer