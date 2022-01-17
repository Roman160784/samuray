import React, { ChangeEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import {Users, UsersStateType, UsersType} from './Users'
import {  AppRootStateType, Dispathc } from '../../redux/reduxStore';
import { followAC, setPageAC, setUsersAC, unFollowAC } from '../../redux/User-reducer';
import UsersC from "./UsersС"
import { isPropertySignature } from 'typescript';


type MSTP = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    curentPage: number
  }
  
  type MDTP ={
    follow : ( id: number) => void
    unFollow : ( id: number) => void
    setCurrentPage : ( curentPage : number) => void
    setUsers : (users : Array<UsersType>) => void
  }
  
  let mapStateToProps = (state: AppRootStateType): MSTP =>({
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      curentPage: state.usersPage.curentPage,
  })
  
  let mapDispatchToProps = (dispatch: Dispathc) : MDTP => ({
    follow : ( id: number) => dispatch(followAC(id)),
    unFollow : ( id: number) => dispatch(unFollowAC(id)),
    setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
    setCurrentPage: (curentPage : number) => dispatch(setPageAC(curentPage))
  })
  

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)


