import { type } from 'os';
import React from 'react';
import p from './MyPost.module.css'


type AppPropsType = {
  message: string
  likesCount: number
}

function MyPost (props: AppPropsType) {
  return (
    <div className={p.postBlock}>
      <div className={p.posts}>
        <div className={p.iteam}>
          <img src="https://ylianova.ru/800/600/https/sun9-35.userapi.com/R1VkhgkHhv9pDpSkCAI7zaJX_x61hf2Z5PdLaw/9CBCdEfc9wo.jpg" />
          {props.message} 
          <div>
          <span>Like:</span>{props.likesCount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPost;