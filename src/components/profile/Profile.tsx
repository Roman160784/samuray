import React from 'react';
import p from './Profile.module.css'
import MyPosts, { postType } from './Posts/MyPosts'
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
// import { postsType } from './Posts/MyPosts'
import state from '../../redux/state'

type ProfilePropsType = {
  posts: Array<postType>
}


function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div >
  )
}

export default Profile;