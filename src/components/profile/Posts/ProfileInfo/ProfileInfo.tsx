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
    if (e.currentTarget.files?.length) {
      props.savePhoto(e.currentTarget.files[0])
    }
  }


  return (

    <div>
      <img className={p.ava} src={props.profile.photos.large || userPhoto} />
      {props.isOwner && <div> <input type="file" onChange={onMainPhotoSlectied} /> </div>}
      <div>
      <div>
          <b>Full name </b> {props.profile.fullName}
        </div>
        <ProfileStatusWithHooks status={props.status}
        updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
      />
        <div>
          <b>Loking for a job </b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {props.profile.lookingForAJob && <div>
          <b>My professional skils</b>  {props.profile.lookingForAJobDescription}</div>}
        <div>
          <b> About me </b> {props.profile.aboutMe}
        </div>
        <div>
          <b> Contacts :</b> {Object.keys(props.profile.contacts).map(key => {
            const data  = props.profile?.contacts
            if(data) {return <Contacts key={key} contactsTitle={key} contactsValue={ data[key as keyof typeof data]!}/>
          }})}    
        </div>
      </div>
      
      <div className={p.discriptionBlock}>
      </div>
    </div>

  )
}

export default ProfileInfo;


export type ContactsPropsType = {
  contactsTitle: string
  contactsValue: string
}

export const Contacts = (props: ContactsPropsType) => {

  return <div className={p.contacts}>  <b>{props.contactsTitle}</b>: {props.contactsValue} </div>

}
