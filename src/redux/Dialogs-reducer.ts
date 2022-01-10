import {MessagePageType, RootStateType} from '../redux/state'
import { ActionsProfileType } from './Profile-reducer';
import { actionType } from './reduxStore';

let initialState: MessagePageType = {
    
        dialogs: [
            { id: 1, name: "Roman" },
            { id: 2, name: "Akhmed" },
            { id: 3, name: "Zufra" },],

        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hey" },
            { id: 3, message: "Yo" },
        ],
        newMessageBody : "",
    }


export const dialogReducer = (state: MessagePageType = initialState, action: actionType) :MessagePageType  => {
     switch(action.type) {
         case "UPDATE-NEW-MESSAGE-BODY" :
            return {...state, newMessageBody : action.body}
            
        case "SEND-MESSAGE" :

            let body = state.newMessageBody;
            return {...state, newMessageBody : "", messages : [...state. messages, {id: 11, message: body} ] }
            
        default:
            return state
     }
}

export type ActionsDialogsType = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessgeAC>

export const updateNewMessageBodyAC = (body : string)  => {
    return{
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    }as const
}
export const sendMessgeAC = ()  => {
    return{
        type: "SEND-MESSAGE",
        
    }as const
}