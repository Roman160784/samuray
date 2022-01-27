import React from 'react';
import p from './Profile.module.css'
import MyPosts, { postType } from './Posts/MyPosts'
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
import { PostsType, RootStateType, StoreType } from '../../redux/state'
import { actionType, AppRootStateType, Dispathc } from '../../redux/reduxStore';
import { store } from '../../redux/reduxStore'
import {MyPostsContainer} from './Posts/MyPostsContainer';
import { useSelector } from 'react-redux';

// type ProfilePropsType__ = {
//   store: AppRootStateType
//   posts: Array<PostsType>
//   dispatch: (action: actionType) => void
// }


function Profile() {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer/>      
    </div >
  )
}

export default Profile;