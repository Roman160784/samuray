import React from 'react';
import  {updateNewPostText, addPost, RootStateType} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export let renderEntireTree = (state : RootStateType)=> {
    ReactDOM.render(<App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>, document.getElementById('root'));
}