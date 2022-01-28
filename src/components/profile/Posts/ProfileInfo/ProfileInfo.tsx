import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileType, RootStateType } from '../../../../redux/state';
import { Preloader } from '../../../preloader/preloader';
import p from './ProfileInfo.module.css'


function ProfileInfo() {
  const profile = useSelector<RootStateType, ProfileType | null>(state => state.profilePage.profile);

  if (!profile) {
    return <Preloader />
  }

  return (

    <div>
      <div>
        <img src='https://media.gettyimages.com/photos/northen-lights-above-winter-mountains-picture-id466331590?s=612x612' />
      </div>
      <div>{profile.aboutMe}</div>
      <img src={profile.photos.small} />
      <div>{profile.fullName}</div>
      <div className={p.discriptionBlock}>
      </div>

    </div>

  )
}

export default ProfileInfo;