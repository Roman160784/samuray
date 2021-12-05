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
   
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    
    let addPost = () => {
      let text = newPostElement.current?.value
      alert(text)
    }


  return (
    <div>
      <h3>my posts</h3>
      <div className={p.posts}>
        {myPosts}
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick = {addPost}>Add Post</button>
        </div>
      </div>

    </div>

  )
}

export default MyPosts;