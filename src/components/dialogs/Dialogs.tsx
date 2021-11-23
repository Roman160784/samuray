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

let dialogsData = [
    { id: 1, name: "Roman" },
    { id: 2, name: "Akhmed" },
    { id: 3, name: "Jafar" },
    { id: 4, name: "Fatima" },
    { id: 5, name: "Nurik" },
    { id: 6, name: "Ramzan" },
    { id: 7, name: "Zufra" },
]

let messagessData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hey" },
    { id: 3, message: "Hey" },
    { id: 4, message: "Hey" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
    { id: 7, message: "Yo" },
]
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div> <DialogIteam name={dialogsData[0].name} id={dialogsData[0].id} /></div>
                <div>  <DialogIteam name={dialogsData[1].name} id={dialogsData[1].id} /></div>
                <div> <DialogIteam name={dialogsData[2].name} id={dialogsData[2].id} /></div>
                <div> <DialogIteam name={dialogsData[3].name} id={dialogsData[3].id}/></div>
                <div>  <DialogIteam name={dialogsData[4].name} id={dialogsData[4].id} /></div>
                <div> <DialogIteam name={dialogsData[5].name} id={dialogsData[5].id}/></div>
                <div><DialogIteam name={dialogsData[6].name} id={dialogsData[6].id} /> </div>

            </div>

            <div className={s.meaasges}>
                <Message message={messagessData[0].message}id={messagessData[0].id} />
                <Message message={messagessData[1].message}id={messagessData[1].id} />
                <Message message={messagessData[2].message}id={messagessData[2].id} />
                <Message message={messagessData[3].message}id={messagessData[3].id} />
                <Message message={messagessData[4].message}id={messagessData[4].id} />
            </div>
        </div>

    )
}

export default Dialogs;

