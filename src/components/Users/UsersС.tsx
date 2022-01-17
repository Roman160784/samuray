import axios from 'axios';
// import * as axios from 'axios';
import React, { ChangeEvent } from 'react';
import style from '../Users/Users.module.css'
import userPhoto from '../../assets/img/userPhoto.png'



export type UsersStateType = {
    users: Array<UsersType>

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



class UsersC extends React.Component  <usersPropsStateType> {

 
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            debugger
            this.props.setUsers(response.data.items)
        });
    }


render () {
    return (
        
        <div>
           {/* <button onClick={this.getUsers}>Get users</button>  */}
            {

            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} />
                        {/* <img src={u.photoUrl} className={style.userPhoto} /> */}
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { this.props.unFollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

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
}

export default UsersC;