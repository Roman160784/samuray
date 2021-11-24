import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Hi", likesCount: 0 },
  { id: 2, message: "Hey", likesCount: 23 },
]

let dialogs = [
  { id: 1, name: "Roman" },
  { id: 2, name: "Akhmed" },
  { id: 3, name: "Jafar" },
  { id: 4, name: "Fatima" },
  { id: 5, name: "Nurik" },
  { id: 6, name: "Ramzan" },
  { id: 7, name: "Zufra" },
]

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hey" },
  { id: 3, message: "Hey" },
  { id: 4, message: "Hey" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Yo" },
  { id: 7, message: "Yo" },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
