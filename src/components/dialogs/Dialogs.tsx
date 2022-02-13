import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import DialogIteam from '../dialogs/DialogIteam/DialogIteam'
import Message from '../dialogs/Message/Message'
import { actionType, AppRootStateType, store } from '../../redux/reduxStore';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';



type DialogsType = {
    id: number
    name: string
}

type messagesType = {
    id: number
    message: string
}

type dialogsMainType = {
    // isAuth: boolean
    dialogs: Array<DialogsType>
    messages: Array<messagesType>
    // store: AppRootStateType
    newMessageBody: string
    sendMessge: (newMessageBody: string) => void

}

const Dialogs = (props: dialogsMainType) => {

    //   if (!props.isAuth) return <Navigate replace to="/Login" />

    let dialogsElements = props.dialogs.map(dialog =>
        <div><DialogIteam name={dialog.name} id={dialog.id} /></div>
    )

    let messageElements = props.messages.map(mess =>
        <Message message={mess.message} id={mess.id} />
    )

    // let onSendMessageClick = () => {
    //     props.sendMessge()
    // }

   
    let addNewMessage = (values: any) => {
    //   alert(values.newMessageBody )
      props.sendMessge(values.newMessageBody)
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.meaasges}>
                <div>{messageElements}</div>
                <div>
                <AddMessgeFormReduxFornm onSubmit={addNewMessage}/>

                    {/* <div> <textarea value={props.newMessageBody}
                        onChange={onNewMessageHange}
                        placeholder='Enter your message'></textarea></div>
                    <div> <button onClick={onSendMessageClick}>SEND</button></div> */}
                </div>
            </div>
        </div>
    )
}

type AddMessgeFormPropsType = {

}


const AddMessgeForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'} />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const AddMessgeFormReduxFornm = reduxForm({form: "dialogAddMessgeForm"})(AddMessgeForm)


export default Dialogs;

