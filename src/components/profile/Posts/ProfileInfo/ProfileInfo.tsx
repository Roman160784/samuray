import React from 'react';
import p from './ProfileInfo.module.css'


function ProfileInfo() {
  return (

    <div>
      <div>
        <img src='https://media.gettyimages.com/photos/northen-lights-above-winter-mountains-picture-id466331590?s=612x612' />
      </div>
      <div className={p.discriptionBlock}>
        ava + discr
      </div>

    </div>

  )
}

export default ProfileInfo;