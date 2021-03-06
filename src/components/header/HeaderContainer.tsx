
import React from 'react';
import {Header} from './Header'
import { loginOutTC } from '../../redux/Auth-reducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/reduxStore';



type HeaderContainerPropsType = {
  login: string | null
  isAuth: boolean
  loginOutTC: () => void
  // setAuthUserDataThunkCreator: ( ) => void
}


  class HeaderContainerI extends React.Component <HeaderContainerPropsType>{

  // componentDidMount() {
  //   this.props.setAuthUserDataThunkCreator()
  // }

  render () {
    return <Header 
     {...this.props}
    isAuth={this.props.isAuth}
    login={this.props.login}
    loginOutTC={this.props.loginOutTC}
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

export const HeaderContainer =  connect (mapStateToProps, {loginOutTC})(HeaderContainerI);





