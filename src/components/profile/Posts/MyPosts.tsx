import React, { ChangeEvent } from 'react';
import p from './MyPosts.module.css'
import MyPost from './post/MyPost'
import {  PostsType } from '../../.././redux/state'
import { ActionsProfileType, addPostAC, changeNewTextAC} from '../../../redux/Profile-reducer'
import { ActionsDialogsType} from '../../../redux/Dialogs-reducer'
import { actionType, AppRootStateType } from '../../../redux/reduxStore';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export type postType = {
  id: number
  message: string
  likesCount: number
}

type postsType = {
  posts: Array<PostsType>
  newPostText: string
  // addPost: () => void
  // UpdateNewText:(newText: string) => void
  sendNewPost: (newPostText: string) => void
}

function MyPosts(props: postsType) {
  let myPosts = props.posts.map(post =>
    <MyPost message={post.message} likesCount={post.likesCount} />
  )

  // let addPost = () => {
  //   props.addPost()
  //     // props.dispatch(addPostAC())
  // }

  // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   let newText = e.currentTarget.value
  //   props.UpdateNewText(newText)
  //     // props.dispatch(changeNewTextAC(e.currentTarget.value))
  // }

  const addNewPost = (values: any) => {
    props.sendNewPost(values.newPostText)
  }

  return (
    <div>
      <h3>my posts</h3>
      <div className={p.posts}>
        {myPosts}
        <div>
          <AddMessageForMyPostsReduxFornm onSubmit={addNewPost} />
        </div>
        {/* <div>
          <textarea
          value={props.newPostText}
            onChange={onPostChange}
            
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div> */}
      </div>

    </div>

  )
}

export const AddMessageForMyPosts = (props: InjectedFormProps) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"newPostText"} placeholder={"Add your post"} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddMessageForMyPostsReduxFornm = reduxForm({form: "myPostsAddMessageForm"})(AddMessageForMyPosts)


export default MyPosts;

