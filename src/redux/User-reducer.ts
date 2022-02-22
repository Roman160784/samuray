
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
        case "FOLLOW":
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: true } : u) }

        case "UN-FOLLOW":
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: false } : u) }

        case "SET-USERS":
            return { ...state, users: action.users }

        case "SET-CURRENT-PAGE":
            return { ...state, curentPage: action.curentPage }

        case "SET-TOTAL-USER-COUNT":
            return { ...state, totalUsersCount: action.totalUsersCount }

        case "TOGLE-IS-FETCHING":
            return { ...state, isFething: action.isFething }

        case "FOLLOWING-IN-PROCESS":
            return { ...state, isFething: action.followingInProcess }

        default:
            return state
    }
}

export type ActionsUsersType = ReturnType<typeof follow> | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof togleIsFetching> | ReturnType<typeof followingInProcessAC>

export const follow = (id: number) => {
    return {
        type: "FOLLOW",
        id,
    } as const
}
export const unFollow = (id: number) => {
    return {
        type: "UN-FOLLOW",
        id,
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        users,
    } as const
}

export const setPage = (curentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        curentPage,

    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USER-COUNT",
        totalUsersCount,

    } as const
}
export const togleIsFetching = (isFething: boolean) => {
    return {
        type: "TOGLE-IS-FETCHING",
        isFething,

    } as const
}
export const followingInProcessAC = (followingInProcess: boolean) => {
    return {
        type: "FOLLOWING-IN-PROCESS",
        followingInProcess,

    } as const
}

export const getUsersThunkCreater = (curentPage = 1, pageSize = 1) => {
    return (dispatch: Dispatch<ActionsUsersType>) => {
        dispatch(togleIsFetching(true))
        dispatch(setPage(curentPage))
        usersAPI.getUsers(curentPage, pageSize)
            .then(data => {
                dispatch(togleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(1000));
                // dispatch(setTotalUsersCount(data.totalUsersCount));
            });
    }
}

export const followThunkCreater = (id: number) => {
    return (dispatch: Dispatch<ActionsUsersType>) => {
        // dispatch(followingInProcessAC(true))
        usersAPI.followUsers(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(follow(id))
                }
                // dispatch(followingInProcessAC(false))
            });
    }
}
export const unFollowThunkCreater = (id: number)  => {
    return (dispatch: Dispatch<ActionsUsersType>) => {
        usersAPI.unFollowUsers(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unFollow(id))
                }
            });
    }
}