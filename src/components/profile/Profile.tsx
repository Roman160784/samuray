import React from 'react';
import p from './Profile.module.css'
import MyPosts, { postType } from './Posts/MyPosts'
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
import { PostsType, StoreType } from '../../redux/state'
import { ActionsProfileType } from '../../redux/Profile-reducer'
import { ActionsDialogsType } from '../../redux/Dialogs-reducer';
import { actionType, AppRootStateType, Dispathc } from '../../redux/reduxStore';
import { store } from '../../redux/reduxStore'
import MyPostsContainer from './Posts/MyPostsContainer';

type ProfilePropsType__ = {
  store: AppRootStateType
  posts: Array<PostsType>
  dispatch: (action: actionType) => void
}


function Profile(props: ProfilePropsType__) {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer posts={props.posts}
        newPostText={props.store.profilePage.newPostText}
        dispatch={props.dispatch.bind(store)}
      />
    </div >
  )
}

export default Profile;