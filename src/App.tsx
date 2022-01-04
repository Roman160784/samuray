import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import { ActionsProfileType } from './redux/Profile-reducer';
import { ActionsDialogsType } from './redux/Dialogs-reducer';
import { AppRootStateType, Dispathc, store } from './redux/reduxStore';




export type AppType = {
  store: AppRootStateType
  dispatch: Dispathc
}


const App: React.FC<AppType> = (props: AppType) => {
const state = store.getState()
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/Dialogs' element={<Dialogs
              dialogs={props.store.dialogPage.dialogs}
              messages={props.store.dialogPage.messages}
              dispatch={store.dispatch.bind(store)}
              store={state}
              _state={props.store}
            />} />
          <Route path='/Profile' element={<Profile
              posts={props.store.profilePage.posts}
              dispatch={store.dispatch.bind(store)}
              store={state}
              _state={props.store}
            />}/>
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;