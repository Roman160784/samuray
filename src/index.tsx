import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppRootStateType, store} from './redux/reduxStore';




export const renderEntireTree = (state: AppRootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// renderEntireTree(store.getState())

// store.subscribe(() => {
//     let state = store.getState();
//     renderEntireTree(state)
// })



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

