import React from 'react';
import { ProfileType, RootStateType } from '../../../../redux/state';
import { Preloader } from '../../../preloader/preloader';
import ProfileStatusWithHooks from './ProfileStatus'
import p from './ProfileInfo.module.css'
import userPhoto from '../../../../assets/img/userPhoto.png'


type ProfileInfoPropstype = {
  profile: ProfileType | null
  status: string 
  updateUserStatusThunkCreator: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropstype) {

  if (!props.profile) {
    return <Preloader />
  }

  return (

    <div>
      {/* <div>
        <img src='https://media.gettyimages.com/photos/northen-lights-above-winter-mountains-picture-id466331590?s=612x612' />
      </div> */}
      
      <div>{props.profile.aboutMe}</div>
      <img className={p.ava} src={props.profile.photos.small || userPhoto} />
      <ProfileStatusWithHooks status={props.status}
      updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
      />
      <div>{props.profile.fullName}</div>
      <div className={p.discriptionBlock}>
      
      
      
      </div>

    </div>

  )
}

export default ProfileInfo;