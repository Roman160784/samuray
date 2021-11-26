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
import {StateType} from './redux/state'

export type AppType = {
  
  state: StateType
  
}

function App(props: AppType) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/Profile' element={<Profile posts={props.state.profilePage.posts} />} />
          <Route path='/Dialogs' element={<Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;