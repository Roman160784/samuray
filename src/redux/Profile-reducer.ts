import { ProfilePageType, RootStateType } from '../redux/state'
import { ActionsDialogsType } from './Dialogs-reducer';

type AppActionType = ActionsProfileType | ActionsDialogsType;

let initialState: ProfilePageType = {
        posts: [
            { id: 1, message: "Hi", likesCount: 0 },
            { id: 2, message: "Hey", likesCount: 23 },],
        newPostText: "it-Kamasutra",
}

export const profileReducer = (state: ProfilePageType = initialState, action: AppActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = { id: 3, message: state.newPostText, likesCount: 0 };
            let copyState = {...state}
            copyState.posts.push(newPost)
            copyState.newPostText = ""
            return copyState

        case "CHANGE-NEW-TEXT":
            return {...state, newPostText : action.newText}
            default:
                return state
    }
}

export type ActionsProfileType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> 

export const addPostAC = () => {
    return{
        type: "ADD-POST",
        
    }as const
}
export const changeNewTextAC = (newText : string)  => {
    return{
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }as const
}