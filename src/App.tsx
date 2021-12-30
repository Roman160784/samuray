import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import store, { ActionsType, StoreType, RootStateType} from './redux/state'


export type AppType = {
  
  store: StoreType
  dispatch: (action: ActionsType) => void
}
// state = {весь ст'йт}

const App: React.FC<AppType> = (props: AppType) => {

  const state = props.store.getState()
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/Profile' element={<Profile
              posts={props.store._state.profilePage.posts}
              dispatch={props.store.dispatch.bind(props.store)}
              // addPost={props.store.addPost.bind(props.store)}
              newPostText={props.store._state.profilePage.newPostText}
              updateNewPostText={props.store.updateNewPostText}
            />}
            />
            <Route path='/Dialogs' element={<Dialogs
              dialogs={props.store._state.messagePage.dialogs}
              messages={props.store._state.messagePage.messages}
              store={props.store}
              _state={state}
            />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;