import React from 'react';
import p from './MyPosts.module.css'
import MyPost from './post/MyPost'


function MyPosts() {

  return (
    <div>
      <h3>my posts</h3>
      <div className={p.posts}>
        <MyPost message='Hi' likesCount='0' />
        <MyPost message='Hey' likesCount='23' />
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>

    </div>

  )
}

export default MyPosts;