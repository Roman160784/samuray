import { createSelector } from 'reselect'
import { UsersType } from '../components/Users/Users'
import {AppRootStateType} from './reduxStore'



export const getUsersSelector = (state: AppRootStateType) => {
return state.usersPage.users
}


//Reselect
export const getUsersSuperSelectot = createSelector(getUsersSelector,( users: Array<UsersType>) =>{
 return users.filter(u => true)
})

export const getPageSizeSelector = (state: AppRootStateType) => {
return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state: AppRootStateType) => {
return state.usersPage.totalUsersCount
}
export const isFethingSelector = (state: AppRootStateType) => {
return state.usersPage.isFething
}
export const curentPageSelector = (state: AppRootStateType) => {
return state.usersPage.curentPage
}
export const followingInProcessSelector = (state: AppRootStateType) => {
return state.usersPage.followingInProcess
}