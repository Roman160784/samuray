import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileType } from '../../redux/state';
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer';


type ProfilePropsType__ = {
  isOwner: boolean
  profile: ProfileType | null
  status: string 
  updateUserStatusThunkCreator : (status: string) => void
  sendNewPost: (newPostText: string) => void
  savePhoto: (img: File) => void
}

function Profile(props: ProfilePropsType__) {

  return (
    <div>
      <ProfileInfo profile={props.profile}
      savePhoto={props.savePhoto}
      status={props.status}
      isOwner={props.isOwner}       
      updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
      />
      <MyPostsContainer />      
    </div >
  )
}

export default Profile;