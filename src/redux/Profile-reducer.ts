
import { profile } from 'console';
import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { profileAPI, ProfileDataResponseType, ResultCodesEnum} from '../Api/Api';
import { PhotosType, ProfilePageType, ProfileType, RootStateType } from '../redux/state'
import { ActionsDialogsType } from './Dialogs-reducer';
import { actionType, AppRootStateType } from './reduxStore';
import { unFollow } from './User-reducer';

type AppActionType = ActionsProfileType | ActionsDialogsType;

let initialState: ProfilePageType = {
    posts: [
        { id: 1, message: "Hi", likesCount: 0 },
        { id: 2, message: "Hey", likesCount: 23 },],
    newPostText: "it-Kamasutra",
    profile: null,
    status: '',
    
}
const initState = {} as ProfilePageType 
export const profileReducer = (state: ProfilePageType = initialState, action: AppActionType): ProfilePageType => {
    switch (action.type) {
        case "PROFILE/ADD-POST":
            let newPost = { id: 3, message: action.newPostText, likesCount: 0 };
            return { ...state, newPostText: "", posts: [...state.posts, newPost] }

        case "PROFILE/CHANGE-NEW-TEXT":
            return { ...state, newPostText: action.newPostText }

        case "PROFILE/SET-USERS-PROFILE":
            return { ...state,  profile: action.profile }
            
        case "PROFILE/SET-USERS-STATUS":
            return { ...state, status: action.status }

        case "PROFILE/REMOVE-POST": 
            return {...state, posts : state.posts.filter(p => p.id !== action.id)}

        case "PROFILE/SAVE-PHOTO" :
            return {...state, profile: {...state.profile!, photos: action.img}} 

        default:
            return state
    }
}

export type ActionsProfileType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> 
| ReturnType<typeof setUsersPropfileAC> | ReturnType<typeof setUserStausAC> | ReturnType<typeof removePostAC> 
 | ReturnType<typeof savePhotoAC> 

export const addPostAC = (newPostText: string) => {
    return {
        type: "PROFILE/ADD-POST",
        newPostText,
    } as const
}
export const changeNewTextAC = (newPostText: string) => {
    return {
        type: "PROFILE/CHANGE-NEW-TEXT",
         newPostText
    } as const
}

export const setUsersPropfileAC = (profile: ProfileType) => {
    return {
        type: "PROFILE/SET-USERS-PROFILE",
        profile,
    } as const
}
export const setUserStausAC = (status: string) => {
    return {
        type: "PROFILE/SET-USERS-STATUS",
        status,
    } as const
}
export const removePostAC = (id: number) => {
    return {
        type: "PROFILE/REMOVE-POST",
        id,
    } as const
}

export const savePhotoAC = (img: PhotosType) => ({type: "PROFILE/SAVE-PHOTO", img} as const)




export const setUsersPropfileThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    let data = await profileAPI.setUserLoginInProfile(userId)
    dispatch(setUsersPropfileAC(data))
}

export const getUsersStatusThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStausAC(data))
}

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    let data = await profileAPI.updateUserStatus(status)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserStausAC(status))
    }
}

export const savePhotoTC = (img: File) => async (dispatch: Dispatch) => {
    let data = await profileAPI.savePhoto(img)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoAC(data.data.photos))
    }
}

export const setProfileDataTC = (profileData: ProfileDataResponseType) => async (dispatch: any, getStae: () => AppRootStateType) => {
    const userId = getStae().authReducer.id
    const data = await profileAPI.setProfile(profileData)
    if(data.resultCode === ResultCodesEnum.Success){
        if( userId !== null) {
            dispatch(setUsersPropfileThunkCreator(userId))
        }
    }
}

