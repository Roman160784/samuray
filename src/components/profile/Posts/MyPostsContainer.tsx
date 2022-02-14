import React, { ChangeEvent } from 'react';
// import p from './MyPosts.module.css'

import MyPosts from '../Posts/MyPosts'
import {  PostsType } from '../../../redux/state'
import {  addPostAC, changeNewTextAC} from '../../../redux/Profile-reducer'
import {  AppRootStateType, Dispathc } from '../../../redux/reduxStore';
import { connect,  } from 'react-redux';



type MSTP = {
  posts: Array<PostsType>
  newPostText: string
}

type MDTP ={
  addPost: () => void
  UpdateNewText : (newText: string) => void
}

let mapStateToProps = (state: AppRootStateType): MSTP =>({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

let mapDispatchToProps = (dispatch: Dispathc) : MDTP => ({
  UpdateNewText : (newText: string) => dispatch(changeNewTextAC(newText)),
  addPost: () => dispatch(addPostAC()) 
})



export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)