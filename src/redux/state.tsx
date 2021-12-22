// import {renderEntireTree} from '../index'

// let renderEntireTree = () => {
//     console.log('state changed')
// }

export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sideBar: sideBarType
}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type MessagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
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

// export let addPost = (postMessage : string): void => {
// let newPost = {id: 3, message: postMessage, likesCount: 0};
// state.profilePage.posts.push(newPost)
// state.profilePage.newPostText = ""
// renderEntireTree() 
// }

// export let updateNewPostText = (newText : string): void => {
//     state.profilePage.newPostText = newText
//     renderEntireTree() 
//     }

// export const subscribe = (observer : () => void) => {
//     renderEntireTree = observer
// }

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi", likesCount: 0 },
                { id: 2, message: "Hey", likesCount: 23 },],
            newPostText: "it-Kamasutra",
        },
        messagePage: {
            dialogs: [
                { id: 1, name: "Roman" },
                { id: 2, name: "Akhmed" },
                { id: 3, name: "Jafar" },
                { id: 4, name: "Fatima" },
                { id: 5, name: "Nurik" },
                { id: 6, name: "Ramzan" },
                { id: 7, name: "Zufra" },],

            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Hey" },
                { id: 3, message: "Hey" },
                { id: 4, message: "Hey" },
                { id: 5, message: "Yo" },
                { id: 6, message: "Yo" },
                { id: 7, message: "Yo" },
            ]
        },
        sideBar: {}
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.renderEntireTree()
    },
    addPost(postMessage: string) {
        let newPost = { id: 3, message: postMessage, likesCount: 0 };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this.renderEntireTree()
    },
    renderEntireTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this.renderEntireTree = observer
    },
    getState() {
        return this._state
    }
}

export default store;