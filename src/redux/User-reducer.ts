import { UsersStateType, UsersType } from '../components/Users/Users';
import { ActionsDialogsType } from './Dialogs-reducer';
import { ActionsProfileType } from './Profile-reducer';

type AppActionType = ActionsUsersType | ActionsDialogsType | ActionsProfileType

let initialState: UsersStateType = {
    users: [],
}

export const usersReducer = (state: UsersStateType = initialState, action: AppActionType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: true } : u) }

        case "UN-FOLLOW":
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: false } : u) }

        case "SET-USERS":
            return { ...state, users: action.users }

        default:
            return state
    }
}

export type ActionsUsersType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (id: number) => {
    return {
        type: "FOLLOW",
        id,
    } as const
}
export const unFollowAC = (id: number) => {
    return {
        type: "UN-FOLLOW",
        id,
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        users,
    } as const
}
