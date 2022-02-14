
import { Dispatch } from 'redux';
import { profileAPI} from '../Api/Api';
import { ProfilePageType, ProfileType, RootStateType } from '../redux/state'
import { ActionsDialogsType } from './Dialogs-reducer';
import { unFollow } from './User-reducer';

type AppActionType = ActionsProfileType | ActionsDialogsType;

let initialState: ProfilePageType = {
    posts: [
        { id: 1, message: "Hi", likesCount: 0 },
        { id: 2, message: "Hey", likesCount: 23 },],
    newPostText: "it-Kamasutra",
    profile: null,
    status: '',

        // {
        //     aboutMe: "я круто чувак 1001%",
        //     contacts: {
        //         facebook: "facebook.com",
        //         website: null,
        //         vk: "vk.com/dimych",
        //         twitter: "https://twitter.com/@sdf",
        //         instagram: "instagra.com/sds",
        //         youtube: null,
        //         github: "github.com",
        //         mainLink: null,
        //     },
        //     lookingForAJob: true,
        //     lookingForAJobDescription: "не ищу, а дурачусь",
        //     fullName: "samurai dimych",
        //     userId: 2,
        //     photos: {
        //         small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        //         large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
        //       }
        // }

}
const initState = {} as ProfilePageType 
export const profileReducer = (state: ProfilePageType = initialState, action: AppActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = { id: 3, message: action.newPostText, likesCount: 0 };
            return { ...state, newPostText: "", posts: [...state.posts, newPost] }

        case "CHANGE-NEW-TEXT":
            return { ...state, newPostText: action.newPostText }

        case "SET-USERS-PROFILE":
            return { ...state, profile: action.profile }

        case "SET-USERS-STATUS":
            return { ...state, status: action.status }

        default:
            return state
    }
}

export type ActionsProfileType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> 
| ReturnType<typeof setUsersPropfileAC> | ReturnType<typeof setUserStausAC> 

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText,
    } as const
}
export const changeNewTextAC = (newPostText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
         newPostText
    } as const
}

export const setUsersPropfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USERS-PROFILE",
        profile,
    } as const
}
export const setUserStausAC = (status: string) => {
    return {
        type: "SET-USERS-STATUS",
        status,
    } as const
}




export const setUsersPropfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.setUserLoginInProfile(userId)
            .then(data => {
                    dispatch(setUsersPropfileAC(data))
            });
    }
}
export const getUsersStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                    dispatch(setUserStausAC(data))
            });
    }
}
export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setUserStausAC(status))  
                }
            });
    }
}


