import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsTypeDialog = {
    name: string
    id: number
}
type PropsTypeMessage = {
    id: number
    message: string
}

const DialogIteam = (props: PropsTypeDialog) => {
    let parth = `${"/Dialogs"} ${props.id}`
    return (
        <NavLink to={parth}>{props.name}</NavLink>
    )
}

const Message = (props: PropsTypeMessage) => {
    return (
        <div className={s.meaasge}>{props.message}</div>
    )
}

let dialogs = [
    { id: 1, name: "Roman" },
    { id: 2, name: "Akhmed" },
    { id: 3, name: "Jafar" },
    { id: 4, name: "Fatima" },
    { id: 5, name: "Nurik" },
    { id: 6, name: "Ramzan" },
    { id: 7, name: "Zufra" },
]

let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hey" },
    { id: 3, message: "Hey" },
    { id: 4, message: "Hey" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
    { id: 7, message: "Yo" },
]

let dialogsElements = dialogs.map(dialog =>
    <div><DialogIteam name={dialog.name} id={dialog.id} /></div>
)

let messageElements = messages.map(mess =>
    <Message message={mess.message} id={mess.id} />
)

const Dialogs = () => {
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

