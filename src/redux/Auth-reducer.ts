import { AuthType, ProfilePageType, ProfileType, RootStateType } from './state'
import { ActionsDialogsType } from './Dialogs-reducer';
import { ActionsProfileType } from './Profile-reducer';
import { Dispatch } from 'redux';
import { authAPI, ResultCodesEnum, securityAPI, usersAPI } from '../Api/Api';
import { stopSubmit } from 'redux-form';

type AppActionType = ActionsProfileType | ActionsDialogsType | ActionsAuthType

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,
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
        case "AUTH/GET-CAPTCHA": {
            return { ...state, captcha: action.captchaUrl }
        }

        default:
            return state
    }
}

export type ActionsAuthType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof getCaptchaAC>


export const setAuthUserDataAC = (id: null | string, login: null | string, email: null | string, isAuth: boolean) => {
    return {
        type: "AUTH/SET-USERS-DATA",
        payload: {
            id, login, email, isAuth,
        }
    } as const
}


export const getCaptchaAC = (captchaUrl: string) => ({ type: 'AUTH/GET-CAPTCHA', captchaUrl } as const)


export const setAuthUserDataThunkCreator: any = () => async (dispatch: Dispatch) => {
    const data = await authAPI.setUserLogin()
    if (data.resultCode === ResultCodesEnum.Success) {
        let { id, login, email, } = data.data
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}


export const loginTC = (email: string, password: string, rememberME: boolean) => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberME)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserDataThunkCreator())
    } 
   
    else {
        if (data.resultCode === ResultCodesEnum.Captcha) {
            dispatch(getcaptchaTC())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: message }))
    }
}

export const loginOutTC = () => async (dispatch: Dispatch) => {
    const data = await authAPI.loginOut()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

export const getcaptchaTC = () => async (dispatch: any) => {
    const res = await securityAPI.getCaptcha()
    dispatch(getCaptchaAC(res.data.url))
}
