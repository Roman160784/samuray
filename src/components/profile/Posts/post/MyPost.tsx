import React from 'react';
import p from './MyPost.module.css'

function MyPost() {
  return (
    <div>
      <div className={p.posts}>
        <div className={p.iteam}>
          <img src="https://cs16planet.ru/steam-avatars/images/avatar3219.jpg" />
          post1
        </div>
      </div>
    </div>
  )
}

export default MyPost;