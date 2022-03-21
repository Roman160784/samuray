import React from 'react';
import style from '../Users/Users.module.css'
import userPhoto from '../../assets/img/userPhoto.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../Api/Api';
import { Pagenator } from './Pagenater';

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

export const UserFunc = (props: UserFuncType) => {

    return (

        <div>
            <Pagenator pageSize={props.pageSize} 
            totalUsersCount={props.totalUsersCount}
             curentPage={props.curentPage}
              onpageChanged={props.onpageChanged }/>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/Profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProcess} onClick={() => {
                                    props.unFollowThunkCreater(u.id)}}>UnFollow</button>
                                
                                : <button disabled={props.followingInProcess} onClick={() => {
                                   props.followThunkCreater(u.id)}}>Follow</button>} 
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/* <div>{u.location.country}</div>
            <div>{u.location.city}</div> */}
                        </span>
                    </span>
                </div>)}
        </div>
    )
}