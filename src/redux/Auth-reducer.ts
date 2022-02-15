import { AuthType, ProfilePageType, ProfileType, RootStateType } from './state'
import { ActionsDialogsType } from './Dialogs-reducer';
import { ActionsProfileType } from './Profile-reducer';
import { Dispatch } from 'redux';
import { authAPI, usersAPI } from '../Api/Api';

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

export const setAuthUserDataAC = (id: null | string| number, login: null | string, email: null | string, ) => {
    return {
        type: "SET-USERS-DATA",
        payload: {
            id, login, email, 
        }

    } as const
}


export const setAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        usersAPI.setUserLogin()
        .then(data=> {
                if(data.resultCode === 0) {
                  let {id, login, email} = data.data
                  dispatch(setAuthUserDataAC(id, login, email))
               }
            });
    }
}


export const loginTC = (email: string, password: string, rememberME: boolean) => {
    return(dispatch: Dispatch) => {
        authAPI.login(email, password, rememberME)
        .then(data => {
            
        })
    }
}

