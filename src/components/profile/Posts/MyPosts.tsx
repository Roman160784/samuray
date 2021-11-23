import React from 'react';
import p from './MyPosts.module.css'
import MyPost from './post/MyPost'


function MyPosts() {

  let postsData = [
    { id: 1, message: "Hi", likesCount: 0},
    { id: 2, message: "Hey", likesCount: 23},
]

  return (
    <div>
      <h3>my posts</h3>
      <div className={p.posts}>
        <MyPost message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <MyPost message={postsData[1].message} likesCount={postsData[1].likesCount} />
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