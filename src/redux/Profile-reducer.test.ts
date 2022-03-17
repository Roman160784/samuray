import { addPostAC, profileReducer } from "./Profile-reducer";


it('add new post', () => {
    let action = addPostAC("Hey every one")
    let state = {
        posts: [
            { id: 1, message: "Hi", likesCount: 0 },
            { id: 2, message: "Hey", likesCount: 23 },],
        newPostText: "it-Kamasutra",
        profile: null,
        status: '',
    }
    let newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(3)
    // expect (newState.posts).toBe("Hey every one")
    expect (newState.posts[2].message).toBe("Hey every one")
  
})


