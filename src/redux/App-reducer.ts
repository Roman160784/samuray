import { Dispatch } from "redux"
import { setAuthUserDataThunkCreator } from './Auth-reducer';



export type initialStateType = {
    intialized: boolean
}

const initialState = {
    intialized: false
}


export const appReducer = (state: initialStateType = initialState, action: AppReducerMainActionType) => {
    switch (action.type) {
        case "APP/SET-INITIOLIZE":
            return { ...state, intialized: true }
        default:
            return state
    }
}


type AppReducerMainActionType = setInetializeType

type setInetializeType = ReturnType<typeof inetializeSuccessAC>

export const inetializeSuccessAC = () => {
    return {
        type: 'APP/SET-INITIOLIZE',
    } as const
}


export const initioliseAppTC = () =>
    (dispatch: Dispatch) => {
        let promise = dispatch(setAuthUserDataThunkCreator())
        promise.then(() => {
            dispatch(inetializeSuccessAC())
        })
    }
