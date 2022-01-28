import { ProfilePageType, ProfileType, RootStateType } from '../redux/state'
import { ActionsDialogsType } from './Dialogs-reducer';

type AppActionType = ActionsProfileType | ActionsDialogsType;

let initialState: ProfilePageType = {
    posts: [
        { id: 1, message: "Hi", likesCount: 0 },
        { id: 2, message: "Hey", likesCount: 23 },],
    newPostText: "it-Kamasutra",
    profile: null
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
            let newPost = { id: 3, message: state.newPostText, likesCount: 0 };
            return { ...state, newPostText: "", posts: [...state.posts, newPost] }

        case "CHANGE-NEW-TEXT":
            return { ...state, newPostText: action.newText }

        case "SET-USERS-PROFILE":
            return { ...state, profile: action.profile }
        default:
            return state
    }
}

export type ActionsProfileType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | ReturnType<typeof setUsersPropfileAC>

export const addPostAC = () => {
    return {
        type: "ADD-POST",

    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export const setUsersPropfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USERS-PROFILE",
        profile,
    } as const
}