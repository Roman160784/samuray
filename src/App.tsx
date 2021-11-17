import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import {BrowserRouter, Routes,  Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className ='app-wrapper-content'>
        <Routes>
        <Route path='/Dialogs' element={<Dialogs/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  ); 
}

export default App;