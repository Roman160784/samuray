import React from 'react';
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer';


// type ProfilePropsType__ = {
//   store: AppRootStateType
//   posts: Array<PostsType>
//   dispatch: (action: actionType) => void
// }


function Profile() {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer/>      
    </div >
  )
}

export default Profile;