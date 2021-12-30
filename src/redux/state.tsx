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
    dispatch: (action: ActionsType) => void
    
}


export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | 
ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessgeAC>

export const addPostAC = (postMessage : string) => {
    return{
        type: "ADD-POST",
        postMessage: postMessage
    }as const
}
export const changeNewTextAC = (newText : string)  => {
    return{
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }as const
}
export const updateNewMessageBodyAC = (body : string)  => {
    return{
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    }as const
}
export const sendMessgeAC = ()  => {
    return{
        type: "SEND-MESSAGE",
        
    }as const
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
                { id: 3, name: "Zufra" },],

            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Hey" },
                { id: 3, message: "Yo" },
            ],
            newMessageBody : "",
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
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = { id: 3, message: action.postMessage, likesCount: 0 };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this.renderEntireTree()
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this.renderEntireTree()
        } else if(action.type === "UPDATE-NEW-MESSAGE-BODY") {
         this._state.messagePage.newMessageBody = action.body
         this.renderEntireTree()
        }else if (action.type === "SEND-MESSAGE") {
            let body = this._state.messagePage.newMessageBody;
            this._state.messagePage.newMessageBody = ""
            this._state.messagePage.messages.push({ id: 11, message: body },)
            this.renderEntireTree()
    }
}
}

export default store;