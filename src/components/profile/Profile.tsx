import React from 'react';
import p from './Profile.module.css'
import MyPosts, { postType } from './Posts/MyPosts'
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
import {ActionsType, PostsType} from '../../redux/state'

type ProfilePropsType__ = {
  posts: Array<PostsType>
  dispatch: (action: ActionsType) => void
  // addPost: (postMessage : string) => void
  newPostText: string
  updateNewPostText: (newText : string) => void
}


function Profile(props: ProfilePropsType__) {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} 
      updateNewPostText={props.updateNewPostText} 
      dispatch={props.dispatch}
       newPostText={props.newPostText}/>
    </div >
  )
}

export default Profile;