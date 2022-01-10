import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import DialogIteam from '../dialogs/DialogIteam/DialogIteam'
import Message from '../dialogs/Message/Message'
import { actionType, AppRootStateType, store } from '../../redux/reduxStore';



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
    newMessageBody: string
    sendMessge: () => void
    updateNewMessageBody: (body: string) => void
    
}


const Dialogs = (props:dialogsMainType) => {
    //const state = store.getState()

    let dialogsElements  = props.dialogs.map(dialog =>
        <div><DialogIteam name={dialog.name} id={dialog.id} /></div>
    )
    
    let messageElements = props.messages.map(mess =>
        <Message message={mess.message} id={mess.id} />
    )

        let onSendMessageClick = () => {
            props.sendMessge()
        }

    let onNewMessageHange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }  

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.meaasges}>
                <div>{messageElements}</div>
                <div>
                    <div> <textarea value={props.newMessageBody} 
                    onChange={onNewMessageHange}
                    placeholder='Enter your message'></textarea></div>
                    <div> <button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

