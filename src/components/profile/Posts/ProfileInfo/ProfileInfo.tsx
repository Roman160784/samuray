import React, { ChangeEvent } from 'react';
import { ProfileType, RootStateType } from '../../../../redux/state';
import { Preloader } from '../../../preloader/preloader';
import ProfileStatusWithHooks from './ProfileStatus'
import p from './ProfileInfo.module.css'
import userPhoto from '../../../../assets/img/userPhoto.png'


type ProfileInfoPropstype = {
  isOwner: boolean
  profile: ProfileType | null
  status: string 
  updateUserStatusThunkCreator: (status: string) => void
  savePhoto: (img: File) => void
}

function ProfileInfo(props: ProfileInfoPropstype) {

  if (!props.profile) {
    return <Preloader />
  }

   const onMainPhotoSlectied = (e: ChangeEvent<HTMLInputElement>) => {
     debugger
      if(e.currentTarget.files?.length) {
        props.savePhoto(e.currentTarget.files[0]) 
      }
   }
  

  return (

    <div>
      <div>{props.profile.aboutMe}</div>
      <img className={p.ava} src={props.profile.photos.small || userPhoto} />
      {props.isOwner && <div> <input type="file" onChange={onMainPhotoSlectied} /> </div>}
      
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