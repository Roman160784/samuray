import { type } from 'os';
import React from 'react';
import p from './MyPost.module.css'


type PropsType = {
  message: string
  likesCount: number
}

function MyPost (props: PropsType) {
  return (
    <div className={p.postBlock}>
      <div className={p.posts}>
        <div className={p.iteam}>
          <img src="https://cs16planet.ru/steam-avatars/images/avatar3219.jpg" />
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