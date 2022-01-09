import React, { ChangeEvent } from 'react';
// import p from './MyPosts.module.css'
import MyPost from './post/MyPost'
import MyPosts from '../Posts/MyPosts'
import {  PostsType } from '../../../redux/state'
import { ActionsProfileType, addPostAC, changeNewTextAC} from '../../../redux/Profile-reducer'
import { actionType, AppRootStateType, store } from '../../../redux/reduxStore';
import { useDispatch } from 'react-redux';


type postsTypeContainer = {
  posts: Array<PostsType>
  newPostText: string
  dispatch: (action: actionType) => void
}

function MyPostsContainer(props: postsTypeContainer) {
  const dispatch = useDispatch()
  const state = store.getState()

  let addPost = () => {
      dispatch(addPostAC()) 
  }

  let onPostChange = (newText: string) => {
      dispatch(changeNewTextAC(newText)) 
  }

  return (
    <MyPosts posts={state.profilePage.posts} UpdateNewText={onPostChange}
    newPostText={state.profilePage.newPostText}
    addPost={addPost}  />
  )
}

export default MyPostsContainer;

