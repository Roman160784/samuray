import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import DialogIteam from '../dialogs/DialogIteam/DialogIteam'
import Message from '../dialogs/Message/Message'
import { RootStateType, StoreType, } from '../../redux/state';
import { sendMessgeAC,  updateNewMessageBodyAC } from '../../redux/Dialogs-reducer';
import { actionType, AppRootStateType } from '../../redux/reduxStore';


 type DialogsType = {
    id: number
    name: string
}

 type messagesType = {
    id: number
    message: string
}

  type dialogsMainType= {
    dialogs: Array<DialogsType>
    messages:Array<messagesType>
    store: AppRootStateType
    _state: AppRootStateType;
    dispatch: (action: actionType) => void
}


const Dialogs = (props:dialogsMainType) => {
    let dialogsElements  = props.dialogs.map(dialog =>
        <div><DialogIteam name={dialog.name} id={dialog.id} /></div>
    )
    
    let messageElements = props.messages.map(mess =>
        <Message message={mess.message} id={mess.id} />
    )

    let newMessageBody = props.store.dialogPage.newMessageBody
        let onSendMessageClick = () => {
            props.dispatch(sendMessgeAC())
        }

    let onNewMessageHange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
    }  

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.meaasges}>
                <div>{messageElements}</div>
                <div>
                    <div> <textarea value={newMessageBody} 
                    onChange={onNewMessageHange}
                    placeholder='Enter your message'></textarea> </div>
                    <div> <button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

