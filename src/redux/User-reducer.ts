
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from '../Api/Api';
import { UsersStateType, UsersType } from '../components/Users/Users';
import { ActionsDialogsType } from './Dialogs-reducer';
import { ActionsProfileType } from './Profile-reducer';
import { AppRootStateType } from './reduxStore';

type AppActionType = ActionsUsersType | ActionsDialogsType | ActionsProfileType

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    curentPage: 1,
    isFething: false,
    followingInProcess: false
}

export const usersReducer = (state: UsersStateType = initialState, action: AppActionType): UsersStateType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: true } : u) }

        case "USERS/UN-FOLLOW":
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: false } : u) }

        case "USERS/SET-USERS":
            return { ...state, users: action.users }

        case "USERS/SET-CURRENT-PAGE":
            return { ...state, curentPage: action.curentPage }

        case "USERS/SET-TOTAL-USER-COUNT":
            return { ...state, totalUsersCount: action.totalUsersCount }

        case "USERS/TOGLE-IS-FETCHING":
            return { ...state, isFething: action.isFething }

        case "USERS/FOLLOWING-IN-PROCESS":
            return { ...state, isFething: action.followingInProcess }

        default:
            return state
    }
}

export type ActionsUsersType = ReturnType<typeof follow> | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof togleIsFetching> | ReturnType<typeof followingInProcessAC>

export const follow = (id: number, ) => {
    return {
        type: "USERS/FOLLOW",
        id,
    } as const
}
export const unFollow = (id: number) => {
    return {
        type: "USERS/UN-FOLLOW",
        id,
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: "USERS/SET-USERS",
        users,
    } as const
}

export const setPage = (curentPage: number) => {
    return {
        type: "USERS/SET-CURRENT-PAGE",
        curentPage,

    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "USERS/SET-TOTAL-USER-COUNT",
        totalUsersCount,

    } as const
}
export const togleIsFetching = (isFething: boolean) => {
    return {
        type: "USERS/TOGLE-IS-FETCHING",
        isFething,

    } as const
}
export const followingInProcessAC = (followingInProcess: boolean) => {
    return {
        type: "USERS/FOLLOWING-IN-PROCESS",
        followingInProcess,

    } as const
}

export const getUsersThunkCreater = (curentPage = 1, pageSize = 1) => async (dispatch: Dispatch<ActionsUsersType>) => {
    dispatch(togleIsFetching(true))
    dispatch(setPage(curentPage))
    let data = await usersAPI.getUsers(curentPage, pageSize)
    dispatch(togleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount));
}


export const followThunkCreater = (id: number) => async (dispatch: Dispatch<ActionsUsersType>) => {
    // dispatch(followingInProcessAC(true))
    let data = await usersAPI.followUsers(id)
    if (data.resultCode == 0) {
        dispatch(follow(id))
    }
    // dispatch(followingInProcessAC(false))
}

export const unFollowThunkCreater = (id: number) => async (dispatch: Dispatch<ActionsUsersType>) => {
    let data = await usersAPI.unFollowUsers(id)
    if (data.resultCode == 0) {
        dispatch(unFollow(id))
    }
}
