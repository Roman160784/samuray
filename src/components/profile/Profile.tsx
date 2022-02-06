import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileType } from '../../redux/state';
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer';


type ProfilePropsType__ = {
  profile: ProfileType | null
  isAuth: boolean
}


function Profile(props: ProfilePropsType__) {

  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer/>      
    </div >
  )
}

export default Profile;