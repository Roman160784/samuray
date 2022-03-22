import React, { useState } from 'react';
import style from '../Users/Users.module.css'

type PagenatorType ={
    pageSize: number
    totalUsersCount: number
    curentPage: number
    onpageChanged: (curentPage: number) => void
}


export const Pagenator = (props: PagenatorType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const portionSize = 10
    const pages = []
    
    
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount/portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionpageNumber = (portionNumber-1) * portionSize +1
    const rightPortionpageNumber = portionNumber * portionSize
   
    return (
            <div>
                {
                    portionNumber > 1 &&
                    <button onClick={ () => {setPortionNumber(portionNumber -1)}}>PREV</button>
                }
                {pages
                .filter(p => p >= leftPortionpageNumber &&  p <= rightPortionpageNumber)
                .map(p => {
                    return <span onClick={(e) => { props.onpageChanged(p) }}
                        className={props.curentPage === p ? style.selectedPage : ""}> {p} </span>
                })}
                {
                    portionCount > portionNumber &&
                    <button onClick={() => {setPortionNumber(portionNumber +1)}}>NEXT</button>
                }
            </div>
            )
}


