import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsTypeDialog = {
    name: string
    id: string
}
type PropsTypeMessage = {
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



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div> <DialogIteam name="Roman" id="1" /></div>
                <div>  <DialogIteam name="Akhmed" id="2" /></div>
                <div> <DialogIteam name="Jafar" id="3" /></div>
                <div> <DialogIteam name="Fatima" id="4" /></div>
                <div>  <DialogIteam name="Nurik" id="5" /></div>
                <div> <DialogIteam name="Ramzan" id="6" /></div>
                <div><DialogIteam name="Zufra" id="7" /> </div>

            </div>

            <div className={s.meaasges}>
                <Message message="Hi" />
                <Message message="Hey" />
                <Message message="Hey" />
                <Message message="Hey" />
                <Message message="Hello" />
            </div>
        </div>

    )
}

export default Dialogs;

