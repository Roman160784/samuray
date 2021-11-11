import React from 'react';
import p from './Profile.module.css'

function  Profile(){
return (
    <div className={p.content}>
    <div>
  <img src='https://media.gettyimages.com/photos/northen-lights-above-winter-mountains-picture-id466331590?s=612x612'/>
  </div>
  <div>
    ava + discr
  </div>
  <div>
    my posts
    <div>
      New post
    </div>
    <div className={p.posts}>
      <div className={p.iteam}>
        post1
      </div>
      <div className={p.iteam}>
        post2
      </div>
    </div>
  </div>

  </div>
)
}

export default Profile;