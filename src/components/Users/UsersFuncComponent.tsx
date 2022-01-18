import React from 'react';
import style from '../Users/Users.module.css'

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
type UserFuncType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    curentPage: number
    unFollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage : ( curentPage : number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    onpageChanged: (curentPage : number) => void
}

export const UserFunc = (props: UserFuncType) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize) 

    let pages = []

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        
        <div>
            
            <div>
                {pages.map(p => {
               return <span onClick={(e) => {props.onpageChanged(p)}} 
               className={props.curentPage === p ? style.selectedPage : "" }> {p} </span> } )}
             </div>
           {/* <button onClick={this.getUsers}>Get users</button>  */}
            {

            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : style.userPhoto} className={style.userPhoto} />
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