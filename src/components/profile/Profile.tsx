import React from 'react';
import p from './Profile.module.css'
import MyPosts from './Posts/MyPosts'
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'

function Profile() {
  return (
    <div>
        <ProfileInfo/>
        <MyPosts />
  </div >
)
}

export default Profile;