import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { postsType } from './components/profile/Posts/MyPosts'
import { postType } from './components/profile/Posts/MyPosts'
import { DialogsType } from './components/dialogs/Dialogs'
import { messagesType } from './components/dialogs/Dialogs'


type AppType = {
  dialogs: Array<DialogsType>
  messages: Array<messagesType>
  posts: Array<postType>
}


function App(props: AppType) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
            <Route path='/Profile' element={<Profile posts={props.posts} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;