import { AuthType, ProfilePageType, ProfileType, RootStateType } from './state'
import { ActionsDialogsType } from './Dialogs-reducer';
import { ActionsProfileType } from './Profile-reducer';
import { Dispatch } from 'redux';
import { authAPI, ResultCodesEnum, usersAPI } from '../Api/Api';
import { stopSubmit } from 'redux-form';

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
        case "AUTH/SET-USERS-DATA":
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth,
            }
        
        //    return { ...state, id : action.payload.id, email: action.payload.email, login: action.payload.login}

        default:
            return state
    }
}

export type ActionsAuthType = ReturnType<typeof setAuthUserDataAC> 

export const setAuthUserDataAC = (id: null | string| number, login: null | string, email: null | string, isAuth: boolean) => {
    return {
        type: "AUTH/SET-USERS-DATA",
        payload: {
            id, login, email, isAuth,
        }

    } as const
}


export const setAuthUserDataThunkCreator: any  = () => {
    return (dispatch: Dispatch) => {
        return authAPI.setUserLogin()
        .then(data=> {
                if(data.resultCode === ResultCodesEnum.Success) {
                  let {id, login, email, } = data.data
                  dispatch(setAuthUserDataAC(id, login, email, true))
               }
            })
    }
}

export const loginTC = (email: string, password: string, rememberME: boolean) => {
    return(dispatch: Dispatch) => {
        authAPI.login(email, password, rememberME)
        .then(data => {
            if(data.resultCode === ResultCodesEnum.Success) {
                dispatch(setAuthUserDataThunkCreator())
            }else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}
export const loginOutTC = () => {
    return(dispatch: Dispatch) => {
        authAPI.loginOut()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
    }
}

