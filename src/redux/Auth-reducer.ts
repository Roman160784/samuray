import { AuthType, ProfilePageType, ProfileType, RootStateType } from './state'
import { ActionsDialogsType } from './Dialogs-reducer';
import { ActionsProfileType } from './Profile-reducer';

type AppActionType = ActionsProfileType | ActionsDialogsType | ActionsAuthType

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
// const initState = {} as ProfilePageType
export const authReducer = (state: AuthType = initialState, action: AppActionType): AuthType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        
        //    return { ...state, id : action.payload.id, email: action.payload.email, login: action.payload.login}

        default:
            return state
    }
}

export type ActionsAuthType = ReturnType<typeof setAuthUserDataAC> 

export const setAuthUserDataAC = (id: string| null| number, email: null | string, login: null | string ) => {
    return {
        type: "SET-USERS-DATA",
        payload: {
            id, email, login, 
        }

    } as const
}
