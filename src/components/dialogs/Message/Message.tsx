import React from 'react';
import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


type PropsTypeMessage = {
    id: number
    message: string
}


const Message = (props: PropsTypeMessage) => {
    return (
        <div className={s.meaasge}>{props.message}</div>
    )
}

export default Message;

