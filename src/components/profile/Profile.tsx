import React from 'react';
import p from './Profile.module.css'
import MyPosts from './Posts/MyPosts'

function Profile() {
  return (
    <div>
    <div>
      <div>
        <img src='https://media.gettyimages.com/photos/northen-lights-above-winter-mountains-picture-id466331590?s=612x612' />
      </div>
      <div>
        ava + discr
      </div>
      <div>
        <MyPosts />
      </div>

    </div>

  </div >
)
}

export default Profile;