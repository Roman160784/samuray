import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { AppRootStateType, Dispathc, store } from './redux/reduxStore';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import { useDispatch } from 'react-redux';




export type AppType = {
  // store: AppRootStateType
  // dispatch: Dispathc
}


const App: React.FC<AppType> = (props: AppType) => {
const state = store.getState()
let dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/Dialogs' element={<DialogsContainer />} />
          <Route path='/Profile' element={<Profile
              posts={state.profilePage.posts}
              dispatch={dispatch.bind(store)}
              store={state}
            />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;