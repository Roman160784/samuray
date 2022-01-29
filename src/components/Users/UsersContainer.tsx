import React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType, Dispathc } from '../../redux/reduxStore';
import { follow, followingInProcessAC, followThunkCreater, getUsersThunkCreater, setPage, setTotalUsersCount, setUsers, togleIsFetching, unFollow, unFollowThunkCreater } from '../../redux/User-reducer';
import { UserFunc } from './UsersFuncComponent';
import axios from 'axios';
import { Preloader } from '../preloader/preloader';



export type UsersStateType = {
  users: Array<UsersType>

}

export type UsersType = {
  id: number
  photos: photosType
  // photoUrl: string
  followed: boolean
  name: string
  // fullName: string
  status: string
  location: LocationType
}

type photosType = {
  small: null | string
  large: null | string
}

type LocationType = {
  city: string
  country: string
}

type usersPropsStateType = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  curentPage: number
  isFething: boolean
  followingInProcess: boolean
  unFollow: (id: number) => void
  follow: (id: number) => void
  setCurrentPage: (curentPage: number) => void
  followingInProcessAC :(followingInProcess: boolean) => void
  getUsersThunkCreater: (curentPage: number, pageSize: number) => void
  followThunkCreater: (id: number) => void
  unFollowThunkCreater: (id: number) => void
}



class UsersAPIComponent extends React.Component<usersPropsStateType> {


  componentDidMount() {

    this.props.getUsersThunkCreater(this.props.curentPage, this.props.pageSize)
    // this.props.togleIsFetching(true)
    // usersAPI.getUsers(this.props.curentPage, this.props.pageSize)
    // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`,{withCredentials: true})
    //   .then(data => {
    //     this.props.togleIsFetching(false)
    //     this.props.setUsers(data.items)
    //     //  this.props.setTotalUsersCount(response.data.totalCount); /// problem 
    //     this.props.setTotalUsersCount(100);
    //   });
  }

  onpageChanged = (curentPage: number) => {
    this.props.getUsersThunkCreater(curentPage, this.props.pageSize)
    // this.props.togleIsFetching(true)
    // this.props.setCurrentPage(curentPage);
    // usersAPI.getUsers(this.props.curentPage, this.props.pageSize)
    //   .then(data => {
    //     this.props.togleIsFetching(false)
    //     this.props.setUsers(data.items);
    //   });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <>
      {this.props.isFething ? <Preloader /> : null}
      <UserFunc
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        followingInProcess = {this.props.followingInProcess}
        curentPage={this.props.curentPage}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
        setCurrentPage={this.props.setCurrentPage}
        onpageChanged={this.onpageChanged} 
        followingInProcessAC={this.props.followingInProcessAC} 
        followThunkCreater={this.props.followThunkCreater}
        unFollowThunkCreater={this.props.unFollowThunkCreater}     
      />
    </>
  }
}



type MSTP = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  curentPage: number
  isFething: boolean
  followingInProcess: boolean
}



let mapStateToProps = (state: AppRootStateType): MSTP => ({
  isFething: state.usersPage.isFething,
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  curentPage: state.usersPage.curentPage,
  followingInProcess: state.usersPage.followingInProcess
})


export const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage: setPage,
  followingInProcessAC,
  getUsersThunkCreater,
  followThunkCreater,
  unFollowThunkCreater,
})(UsersAPIComponent)


