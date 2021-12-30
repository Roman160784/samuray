
const profileReducer = (state, action) => {
    if (action.type === "ADD-POST") {
        let newPost = { id: 3, message: action.postMessage, likesCount: 0 };
        state.posts.push(newPost)
        state.newPostText = ""
    } else if (action.type === "CHANGE-NEW-TEXT") {
        state.newPostText = action.newText  
}
    return state
}