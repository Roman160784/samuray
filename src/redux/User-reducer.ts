import { UsersStateType, UsersType } from '../components/Users/Users';
import { ActionsDialogsType } from './Dialogs-reducer';
import { ActionsProfileType } from './Profile-reducer';

type AppActionType = ActionsUsersType | ActionsDialogsType | ActionsProfileType

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    curentPage: 1,
    isFething: false,
}

export const usersReducer = (state: UsersStateType = initialState, action: AppActionType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: true } : u) }

        case "UN-FOLLOW":
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: false } : u) }

        case "SET-USERS":
            return { ...state, users: action.users }

        case "SET-CURRENT-PAGE":
            return { ...state, curentPage : action.curentPage}

        case "SET-TOTAL-USER-COUNT":
            return { ...state, totalUsersCount : action.totalUsersCount}

        case "TOGLE-IS-FETCHING":
            return { ...state, isFething : action.isFething}

        default:
            return state
    }
}

export type ActionsUsersType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC>
 | ReturnType<typeof setUsersAC> | ReturnType<typeof setPageAC> | ReturnType<typeof setTotalUsersCountAC> 
 | ReturnType<typeof togleIsFetchingAC>

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

export const setPageAC = (curentPage : number) => {
    return {
        type: "SET-CURRENT-PAGE",
        curentPage,

    }as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USER-COUNT",
        totalUsersCount,

    }as const
}
export const togleIsFetchingAC = (isFething: boolean) => {
    return {
        type: "TOGLE-IS-FETCHING",
        isFething,

    }as const
}