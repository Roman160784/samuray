import axios from 'axios';
// import * as axios from 'axios';
import React, { ChangeEvent } from 'react';
import style from './Users.module.css'
import userPhoto from '../../assets/img/userPhoto.png'
import { NavLink } from 'react-router-dom';


export type UsersStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    curentPage: number
    isFething: boolean
    followingInProcess: boolean
}

export type UsersType = {
    id: number
    photos: photosType
    // photoUrl: string
    followed: boolean
    name: string
    // fullName: string
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

type usersPropsStateType = {
    users: Array<UsersType>
    unFollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    followingInProcessAC: (followingInProcess: boolean) => void
    followingInProcess: boolean

}

export const Users = (props: usersPropsStateType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            debugger
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response: any) => {
                debugger
                props.setUsers(response.data.items)
               
            });
        }
    }
  

    return (
        
        <div>
           <button onClick={getUsers}>Get users</button> 
            {

            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/Profile" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} />
                        </NavLink>
                        {/* <img src={u.photoUrl} className={style.userPhoto} /> */}
                    </div>
                    <div>
                        {u.followed 
                        ? <button disabled={props.followingInProcess} onClick={() => {props.unFollow(u.id) }}>UnFollow</button>
                        : <button disabled={props.followingInProcess} onClick={() => {props.follow(u.id)}}>Follow</button>}
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
            </div>)
        }</div>
    )
}