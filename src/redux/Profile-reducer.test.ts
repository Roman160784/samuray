import { addPostAC, profileReducer, removePostAC } from "./Profile-reducer";

const state = {
    posts: [
        { id: 1, message: "Hi", likesCount: 0 },
        { id: 2, message: "Hey", likesCount: 23 },],
    newPostText: "it-Kamasutra",
    profile: null,
    status: '',
}

it('add new post', () => {
    let action = addPostAC("Hey every one")
   
    let newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(3)
    // expect (newState.posts).toBe("Hey every one")
    expect (newState.posts[2].message).toBe("Hey every one")
  
})

it('remove post', () => {

    let action = removePostAC(1)
   
    let newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(1)
})
it('cant to delete post without correct id, lenght can not be cchanged', () => {

    let action = removePostAC(100)
   
    let newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(2)
})



