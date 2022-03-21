import React from 'react';
import style from '../Users/Users.module.css'
import userPhoto from '../../assets/img/userPhoto.png'
import { NavLink } from 'react-router-dom';
import { Pagenator } from './Pagenater';
import { User } from './User';

export type UsersStateType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: number
    photos: photosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type photosType = {
    small: null | string
    large: null | string
}

type LocationType = {
    city: string
    country: string
}
type UserFuncType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    curentPage: number
    followingInProcess: boolean
    unFollow: (id: number) => void
    follow: (id: number) => void
    setCurrentPage: (curentPage: number) => void
    onpageChanged: (curentPage: number) => void
    followingInProcessAC: (followingInProcess: boolean) => void
    followThunkCreater: (id: number) => void
    unFollowThunkCreater: (id: number) => void
}

export const UserFunc = ({users, pageSize, totalUsersCount, curentPage, followingInProcess,
     onpageChanged, followThunkCreater, unFollowThunkCreater}: UserFuncType) => {
    
    return (

        <div>
            <Pagenator pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                curentPage={curentPage}
                onpageChanged={onpageChanged} />

            {
                users.map(u => <User user={u}
                    key={u.id}
                    followingInProcess={followingInProcess}
                    unFollowThunkCreater={unFollowThunkCreater}
                    followThunkCreater={followThunkCreater} />
                )
            }

        </div>
    )
}