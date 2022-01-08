import React, { ChangeEvent } from 'react';
import p from './MyPosts.module.css'
import MyPost from './post/MyPost'
import {  PostsType } from '../../.././redux/state'
import { ActionsProfileType, addPostAC, changeNewTextAC} from '../../../redux/Profile-reducer'
import { ActionsDialogsType} from '../../../redux/Dialogs-reducer'
import { actionType, AppRootStateType } from '../../../redux/reduxStore';

export type postType = {
  id: number
  message: string
  likesCount: number
}

type postsType = {
  UpdateNewText:(text: string) => void
  posts: Array<PostsType>
  newPostText: string
  addPost: () => void

  // dispatch: (action: actionType) => void
}

function MyPosts(props: postsType) {
  let myPosts = props.posts.map(post =>
    <MyPost message={post.message} likesCount={post.likesCount} />
  )

  let addPost = () => {
    props.addPost()
      // props.dispatch(addPostAC())
  }

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.currentTarget.value
    props.UpdateNewText(newText)
      // props.dispatch(changeNewTextAC(e.currentTarget.value))
  }

  return (
    <div>
      <h3>my posts</h3>
      <div className={p.posts}>
        {myPosts}
        <div>
          <textarea
          value={props.newPostText}
            onChange={onPostChange}
            
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>

    </div>

  )
}

export default MyPosts;

