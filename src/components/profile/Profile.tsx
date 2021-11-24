import React from 'react';
import p from './Profile.module.css'
import MyPosts from './Posts/MyPosts'
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
import { postsType } from './Posts/MyPosts'




function Profile(props: postsType) {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div >
  )
}

export default Profile;