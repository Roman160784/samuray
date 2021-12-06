import React from 'react';
import p from './Profile.module.css'
import MyPosts, { postType } from './Posts/MyPosts'
import ProfileInfo from '../profile/Posts/ProfileInfo/ProfileInfo'
// import { postsType } from './Posts/MyPosts'
import state, {addPost, RootStateType, PostsType} from '../../redux/state'

type ProfilePropsType = {
  posts: Array<PostsType>
  addPost: (postMessage : string) => void
  // state: RootStateType
}


function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={addPost}/>
    </div >
  )
}

export default Profile;