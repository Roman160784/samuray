import React from 'react';
import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsTypeDialog = {
    name: string
    id: number
}


const DialogIteam = (props: PropsTypeDialog) => {
    let parth = `${"/Dialogs"} ${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to={parth}>{props.name}</NavLink>
        </div>
    )
}

   

export default DialogIteam;

