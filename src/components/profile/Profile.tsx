import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileType } from '../../redux/state';
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer';


type ProfilePropsType__ = {
  profile: ProfileType | null
  status: string | null
  // isAuth: boolean
}


function Profile(props: ProfilePropsType__) {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} />
      <MyPostsContainer/>      
    </div >
  )
}

export default Profile;