import React from 'react';
import p from './MyPosts.module.css'
import MyPost from './post/MyPost'


function MyPosts() {

  let posts = [
    { id: 1, message: "Hi", likesCount: 0},
    { id: 2, message: "Hey", likesCount: 23},
]
  
  let myPosts = posts.map(post => 
    <MyPost message={post.message} likesCount={post.likesCount} />
    )

  return (
    <div>
      <h3>my posts</h3>
      <div className={p.posts}>
        {myPosts}
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