
import { ActionsDialogsType, dialogReducer } from "./Dialogs-reducer"
import { ActionsProfileType, profileReducer } from "./Profile-reducer"

export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sideBar: sideBarType
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
}
export type MessagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

type sideBarType = {}

export type ProfileType ={
    aboutMe: string
    contacts: ContactsType 
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type ContactsType = {
    facebook : string 
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null 
}

type PhotosType = {
small: string
large: string
}


// export type StoreType = {
//     _state: RootStateType
//     updateNewPostText: (newText: string) => void
//     addPost: (postMessage: string) => void
//     renderEntireTree: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsProfileType | ActionsDialogsType) => void
    
// }

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: "Hi", likesCount: 0 },
//                 { id: 2, message: "Hey", likesCount: 23 },],
//             newPostText: "it-Kamasutra",
//             profile: null,
//         },
//         messagePage: {
//             dialogs: [
//                 { id: 1, name: "Roman" },
//                 { id: 2, name: "Akhmed" },
//                 { id: 3, name: "Zufra" },],

//             messages: [
//                 { id: 1, message: "Hi" },
//                 { id: 2, message: "Hey" },
//                 { id: 3, message: "Yo" },
//             ],
//             newMessageBody : "",
//         },
        
//         sideBar: {}
//     },
//     updateNewPostText(newText: string) {
//         this._state.profilePage.newPostText = newText
//         this.renderEntireTree()
//     },
//     addPost(postMessage: string) {
//         let newPost = { id: 3, message: postMessage, likesCount: 0 };
//         this._state.profilePage.posts.push(newPost)
//         this._state.profilePage.newPostText = ""
//         this.renderEntireTree()
//     },
    
//     renderEntireTree() {
//         console.log('state changed')
//     },

//     subscribe(observer) {
//         this.renderEntireTree = observer
//     },
//     getState() {
//         return this._state
//     },

//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagePage = dialogReducer(this._state.messagePage, action)
//             this.renderEntireTree()
//     }
// }


// export default store;