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
          
        case "SEND-MESSAGE" :

            let body = action.newMessageBody;
            return {...state, newMessageBody : "", messages : [...state. messages, {id: 11, message: body} ] }
            
        default:
            return state
     }
}

export type ActionsDialogsType = ReturnType<typeof sendMessgeAC>


export const sendMessgeAC = (newMessageBody: string)  => {
    return{
        type: "SEND-MESSAGE",
        newMessageBody
    }as const
}