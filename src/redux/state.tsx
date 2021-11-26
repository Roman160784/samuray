export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

type ProfilePageType = {
    posts: Array<PostsType>
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

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi", likesCount: 0 },
            { id: 2, message: "Hey", likesCount: 23 },],
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
            { id: 7, message: "Yo" },]
    }

}

export default state;