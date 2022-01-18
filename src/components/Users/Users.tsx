import axios from 'axios';
// import * as axios from 'axios';
import React, { ChangeEvent } from 'react';
import style from './Users.module.css'
import userPhoto from '../../assets/img/userPhoto.png'


export type UsersStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    curentPage: number
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

}

export const Users = (props: usersPropsStateType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            debugger
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response: any) => {
                debugger
                props.setUsers(response.data.items)
                // props.setUsers( [
                //      {
                //         id: 1, photoUrl: 'https://2ch.hk/b/thumb/214705633/15830721515210s.jpg', followed: false, fullName: "Roma", status: "Try to learn React",
                //         location: { city: "Gomel", country: "Belarus" }
                //     },
                //     {
                //         id: 2, photoUrl: 'https://rf4game.ru/wp-content/uploads/avatar/256/0007/7198.jpg', followed: true, fullName: "Alex", status: "Driver",
                //         location: { city: "Rome", country: "Italy" }
                //     },
                //     {
                //         id: 3, photoUrl: 'https://i1.sndcdn.com/avatars-000231267714-v4a7cf-t240x240.jpg', followed: false, fullName: "Sam", status: "I love USA",
                //         location: { city: "NY", country: "USA" }
                //     },
                //     {
                //         id: 4, photoUrl: 'https://99px.ru/sstorage/1/2010/08/11508101338482051.jpg', followed: false, fullName: "Vasya", status: "I like VODKA",
                //         location: { city: "Warshav", country: "Poland" }
                //     },]
                // )
            });
        }
    }
    // if (props.users.length === 0) {
    //     debugger
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response: any) => {
    //         debugger
    //         props.setUsers(response.data.items)
    //         // props.setUsers( [
    //         //      {
    //         //         id: 1, photoUrl: 'https://2ch.hk/b/thumb/214705633/15830721515210s.jpg', followed: false, fullName: "Roma", status: "Try to learn React",
    //         //         location: { city: "Gomel", country: "Belarus" }
    //         //     },
    //         //     {
    //         //         id: 2, photoUrl: 'https://rf4game.ru/wp-content/uploads/avatar/256/0007/7198.jpg', followed: true, fullName: "Alex", status: "Driver",
    //         //         location: { city: "Rome", country: "Italy" }
    //         //     },
    //         //     {
    //         //         id: 3, photoUrl: 'https://i1.sndcdn.com/avatars-000231267714-v4a7cf-t240x240.jpg', followed: false, fullName: "Sam", status: "I love USA",
    //         //         location: { city: "NY", country: "USA" }
    //         //     },
    //         //     {
    //         //         id: 4, photoUrl: 'https://99px.ru/sstorage/1/2010/08/11508101338482051.jpg', followed: false, fullName: "Vasya", status: "I like VODKA",
    //         //         location: { city: "Warshav", country: "Poland" }
    //         //     },]
    //         // )
    //     });
    // }

    return (
        
        <div>
           <button onClick={getUsers}>Get users</button> 
            {

            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} />
                        {/* <img src={u.photoUrl} className={style.userPhoto} /> */}
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unFollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        {/* <div>{u.fullName}</div> */}
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