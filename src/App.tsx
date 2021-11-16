import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      {/* <Profile /> */}
      <div className='app-wrapper-content'>
        <Dialogs />
      </div>
    </div>
  );
}

export default App;