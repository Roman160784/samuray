import React from 'react';
import p from './MyPosts.module.css'
import MyPost from './post/MyPost'


function MyPosts() {
 
  return (
      <div>
        my posts
        <div>
         <MyPost message='Hi'likesCount='0'/>
         <MyPost  message='Hey' likesCount='23'/>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        
      </div> 
      
  )
}

export default MyPosts;