import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { store } from './redux/reduxStore';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import { useDispatch } from 'react-redux';
import ProfileContainer from './components/profile/ProfileContainer';
import { setTotalUsersCount, setUsers } from './redux/User-reducer';




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
          <Route path='/Profile/*' element={<ProfileContainer
          setTotalUsersCount={setTotalUsersCount}
          setUsers={setUsers}
              // posts={state.profilePage.posts}
              // dispatch={dispatch.bind(store)}
              // store={state}
            />}/>
          <Route path='/Users' element={<UsersContainer/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;