import React from 'react';
import style from '../Users/Users.module.css'

type PagenatorType ={
    pageSize: number
    totalUsersCount: number
    curentPage: number
    onpageChanged: (curentPage: number) => void
}


export const Pagenator = (props: PagenatorType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => { props.onpageChanged(p) }}
                        className={props.curentPage === p ? style.selectedPage : ""}> {p} </span>
                })}
            </div>
            )
}