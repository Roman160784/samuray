import React from 'react';
import Profile from '../profile/Profile'
import { AppRootStateType, } from '../../redux/reduxStore';
import axios from 'axios';

import { connect } from 'react-redux';
import { setUsersPropfileAC } from '../../redux/Profile-reducer';
import { ProfileType } from '../../redux/state';


type ProfileContainerPropsType__ = {
  profile: ProfileType | null
  setUsersPropfileAC: (propfile: ProfileType) => void
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
      <Profile profile={this.props.profile}
      />      
    </div >
)  } 
}

type MSTP = {
  profile: ProfileType | null
  
}

let mapStateToProps = (state: AppRootStateType) : MSTP => ({
profile: state.profilePage.profile,

})

export default connect(mapStateToProps, {setUsersPropfileAC})(ProfileContainer) ;