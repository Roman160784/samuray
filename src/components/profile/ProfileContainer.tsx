import React from 'react';
import Profile from '../profile/Profile'
import { PostsType, StoreType } from '../../redux/state'
import { actionType, AppRootStateType, Dispathc } from '../../redux/reduxStore';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import axios from 'axios';
import { UsersType } from '../Users/UsersFuncComponent';


type ProfileContainerPropsType__ = {
  // store: AppRootStateType
  // posts: Array<PostsType>
  // dispatch: (action: actionType) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  setUsers: (users: Array<UsersType>) => void
}


class ProfileContainer extends React.Component <ProfileContainerPropsType__>{

  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/2`)
      .then((response) => {
        this.props.setTotalUsersCount(100);
        this.props.setUsers(response.data.items);
      })
  }
  
render () {
  
  return (
    <div>
      <Profile 
      // {...this.props} 
      />      
    </div >
)  } 
}

export default ProfileContainer;