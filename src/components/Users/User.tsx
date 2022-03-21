import React from 'react';
import { NavLink } from 'react-router-dom';
import { UsersType } from './UsersFuncComponent';
import style from '../Users/Users.module.css'
import userPhoto from '../../assets/img/userPhoto.png'

type UserPropsType = {
    user: UsersType
    followingInProcess: boolean
    unFollowThunkCreater: (id: number) => void
    followThunkCreater: (id: number) => void
}

export const User = ({ user, followingInProcess, unFollowThunkCreater, followThunkCreater }: UserPropsType) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/Profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProcess} onClick={() => {
                            unFollowThunkCreater(user.id)
                        }}>UnFollow</button>

                        : <button disabled={followingInProcess} onClick={() => {
                            followThunkCreater(user.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    {/* <div>{u.location.country}</div>
            <div>{u.location.city}</div> */}
                </span>
            </span>
        </div>

    )
}