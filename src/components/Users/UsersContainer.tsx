import React, { ChangeEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import {Users, UsersStateType, UsersType} from './Users'
import {  AppRootStateType, Dispathc } from '../../redux/reduxStore';
import { followAC, setUsersAC, unFollowAC } from '../../redux/User-reducer';
import UsersC from "./UsersС"


type MSTP = {
    users: Array<UsersType>
  }
  
  type MDTP ={
    follow : ( id: number) => void
    unFollow : ( id: number) => void
    setUsers : (users : Array<UsersType>) => void
  }
  
  let mapStateToProps = (state: AppRootStateType): MSTP =>({
      users: state.usersPage.users
  })
  
  let mapDispatchToProps = (dispatch: Dispathc) : MDTP => ({
    follow : ( id: number) => dispatch(followAC(id)),
    unFollow : ( id: number) => dispatch(unFollowAC(id)),
    setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)) 
  })
  

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)


