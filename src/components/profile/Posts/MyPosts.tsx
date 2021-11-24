import React from 'react';
import p from './MyPosts.module.css'
import MyPost from './post/MyPost'

export type postType = {
  id: number
  message: string
  likesCount: number
}

export type postsType = {
  posts: Array<postType>
}

function MyPosts(props: postsType) {

  let myPosts = props.posts.map(post =>
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