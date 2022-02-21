import {AppRootStateType} from './reduxStore'

export const getUsersSelector = (state: AppRootStateType) => {
return state.usersPage.users
}
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