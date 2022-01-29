import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import {Header} from './Header'
import { AuthType } from '../../redux/state';
import { setAuthUserDataAC } from '../../redux/Auth-reducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/reduxStore';
import { usersAPI } from '../../Api/Api';


type HeaderContainerPropsType = {
  login: string | null
  isAuth: boolean
  setAuthUserDataAC: (id: string| null| number, email: null | string, login: null | string) => void
}


  class HeaderContainerI extends React.Component <HeaderContainerPropsType>{

  componentDidMount() {
    usersAPI.setUserLogin()
    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials : true})
      .then(data=> {
        if(data.resultCode === 0) {
          let {id, login, email} = data.data
          this.props.setAuthUserDataAC(id, email, login)
        }
      });
  }

  render () {
    return <Header 
    {...this.props} 
    isAuth={this.props.isAuth}
    login={this.props.login}
   />  
  }
}

type MSTP = {
  login: string | null
  isAuth: boolean
}

const mapStateToProps =  (state: AppRootStateType):MSTP => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth
});

export const HeaderContainer =  connect (mapStateToProps, {setAuthUserDataAC})(HeaderContainerI);





