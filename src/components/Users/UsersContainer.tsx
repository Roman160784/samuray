import React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType, Dispathc } from '../../redux/reduxStore';
import { follow, setPage, setTotalUsersCount, setUsers, togleIsFetching, unFollow } from '../../redux/User-reducer';
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
  unFollow: (id: number) => void
  follow: (id: number) => void
  setCurrentPage: (curentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  togleIsFetching: (isFething: boolean) => void
  setUsers: (users: Array<UsersType>) => void
}



class UsersAPIComponent extends React.Component<usersPropsStateType> {


  componentDidMount() {
    this.props.togleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`,{withCredentials: true})
      .then((response) => {
        this.props.togleIsFetching(false)
        this.props.setUsers(response.data.items)
        //  this.props.setTotalUsersCount(response.data.totalCount); /// problem 
        this.props.setTotalUsersCount(100);
      });
  }

  onpageChanged = (curentPage: number) => {
    this.props.togleIsFetching(true)
    this.props.setCurrentPage(curentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${curentPage}&count=${this.props.pageSize}`, {withCredentials: true})
      .then((response) => {
        this.props.togleIsFetching(false)
        this.props.setUsers(response.data.items);
      });
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
        curentPage={this.props.curentPage}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
        setUsers={this.props.setUsers}
        setCurrentPage={this.props.setCurrentPage}
        setTotalUsersCount={this.props.setTotalUsersCount}
        onpageChanged={this.onpageChanged}
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
}



let mapStateToProps = (state: AppRootStateType): MSTP => ({
  isFething: state.usersPage.isFething,
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  curentPage: state.usersPage.curentPage,
})


export const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  togleIsFetching,
  setCurrentPage: setPage,
})(UsersAPIComponent)


