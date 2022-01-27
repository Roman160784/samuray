import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../../redux/state';
import { Preloader } from '../../../preloader/preloader';
import p from './ProfileInfo.module.css'


function ProfileInfo() {
  const profile = useSelector<RootStateType, any>(state => state.profilePage.profile);
  
  // if (profile?.aboutMe) {
  //   return <Preloader/>
  // }

  return (

    <div>
      <div>
        <img src='https://media.gettyimages.com/photos/northen-lights-above-winter-mountains-picture-id466331590?s=612x612' />
      </div>
      <div className={p.discriptionBlock}>
      <div>{profile?.aboutMe}</div>
      </div>

    </div>

  )
}

export default ProfileInfo;