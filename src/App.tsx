import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import { HeaderContainer } from '../src/components/header/HeaderContainer'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { store } from './redux/reduxStore';
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { useDispatch } from 'react-redux';
import ProfileContainer from './components/profile/ProfileContainer';
import {Login} from './components/Login/Login'


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
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Dialogs' element={<DialogsContainer />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Profile' element={<ProfileContainer />} >
              <Route path=':userId' element={<ProfileContainer />} />
            </Route>
            <Route path='/Users' element={<UsersContainer />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;