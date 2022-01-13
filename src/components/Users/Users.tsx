import React, { ChangeEvent } from 'react';
import style from './Users.module.css'

export type UsersStateType = {
    users: Array<UsersType>

}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
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
    
    if (props.users.length === 0) {
        props.setUsers( [
             {
                id: 1, photoUrl: 'https://2ch.hk/b/thumb/214705633/15830721515210s.jpg', followed: false, fullName: "Roma", status: "Try to learn React",
                location: { city: "Gomel", country: "Belarus" }
            },
            {
                id: 2, photoUrl: 'https://rf4game.ru/wp-content/uploads/avatar/256/0007/7198.jpg', followed: true, fullName: "Alex", status: "Driver",
                location: { city: "Rome", country: "Italy" }
            },
            {
                id: 3, photoUrl: 'https://i1.sndcdn.com/avatars-000231267714-v4a7cf-t240x240.jpg', followed: false, fullName: "Sam", status: "I love USA",
                location: { city: "NY", country: "USA" }
            },
            {
                id: 4, photoUrl: 'https://99px.ru/sstorage/1/2010/08/11508101338482051.jpg', followed: false, fullName: "Vasya", status: "I like VODKA",
                location: { city: "Warshav", country: "Poland" }
            },]
        )
    }


    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unFollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }</div>
    )
}