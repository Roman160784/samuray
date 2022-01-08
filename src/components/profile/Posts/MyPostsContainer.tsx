import React, { ChangeEvent } from 'react';
// import p from './MyPosts.module.css'
import MyPost from './post/MyPost'
import MyPosts from '../Posts/MyPosts'
import {  PostsType } from '../../../redux/state'
import { ActionsProfileType, addPostAC, changeNewTextAC} from '../../../redux/Profile-reducer'
import { ActionsDialogsType} from '../../../redux/Dialogs-reducer'
import { actionType, AppRootStateType } from '../../../redux/reduxStore';


type postsTypeContainer = {
  posts: Array<PostsType>
  newPostText: string
  dispatch: (action: actionType) => void
}

function MyPostsContainer(props: postsTypeContainer) {
 

  let addPost = () => {
      props.dispatch(addPostAC()) // сделать зависимым от store
  }

  let onPostChange = (newText: string) => {
      props.dispatch(changeNewTextAC(newText)) // сделать зависимым от store
  }

  return (
    <MyPosts posts={props.posts} UpdateNewText={onPostChange}
    newPostText={props.newPostText}
    addPost={addPost}  />
  )
}

export default MyPostsContainer;

