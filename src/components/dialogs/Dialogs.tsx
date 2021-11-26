import React from 'react';
import s from './Dialogs.module.css'
import DialogIteam from '../dialogs/DialogIteam/DialogIteam'
import Message from '../dialogs/Message/Message'
import { NavLink } from 'react-router-dom'
import { StateType } from '../../redux/state'

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
}


const Dialogs = (props:dialogsMainType) => {
    let dialogsElements  = props.dialogs.map(dialog =>
        <div><DialogIteam name={dialog.name} id={dialog.id} /></div>
    )
    
    let messageElements = props.messages.map(mess =>
        <Message message={mess.message} id={mess.id} />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.meaasges}>
                <div>{messageElements}</div>
            </div>
        </div>
    )
}

export default Dialogs;

