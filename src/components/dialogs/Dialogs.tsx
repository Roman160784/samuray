import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import DialogIteam from '../dialogs/DialogIteam/DialogIteam'
import Message from '../dialogs/Message/Message'
import { NavLink } from 'react-router-dom'
import { RootStateType, sendMessgeAC, StoreType, updateNewMessageBodyAC } from '../../redux/state';


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
    store: StoreType
    _state: RootStateType;
}


const Dialogs = (props:dialogsMainType) => {
    let dialogsElements  = props.dialogs.map(dialog =>
        <div><DialogIteam name={dialog.name} id={dialog.id} /></div>
    )
    
    let messageElements = props.messages.map(mess =>
        <Message message={mess.message} id={mess.id} />
    )

    let newMessageBody = props._state.messagePage.newMessageBody
        let onSendMessageClick = () => {
            props.store.dispatch(sendMessgeAC())
        }

    let onNewMessageHange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
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

