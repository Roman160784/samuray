import React from 'react';
import Profile from '../profile/Profile'
import { PostsType, StoreType } from '../../redux/state'
import { actionType, AppRootStateType, Dispathc } from '../../redux/reduxStore';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import axios from 'axios';
import { UsersType } from '../Users/UsersFuncComponent';
import { connect } from 'react-redux';
import { setUsersPropfileAC } from '../../redux/Profile-reducer';


type ProfileContainerPropsType__ = {
  profile: null
  setUsersPropfileAC: (propfile: null) => void
}


class ProfileContainer extends React.Component <ProfileContainerPropsType__>{

  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/2`)
    
      .then(response => {
        this.props.setUsersPropfileAC(response.data);
      })
  }
  
render () {
  
  return (
    <div>
      <Profile 
      />      
    </div >
)  } 
}

type MSTP = {
  profile: null
}

let mapStateToProps = (state: AppRootStateType) : MSTP => ({
profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUsersPropfileAC})(ProfileContainer) ;