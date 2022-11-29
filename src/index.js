import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

initializeApp({
    apiKey: "AIzaSyC3OGB9NV6Jw_haW3rPSOiI97olRjjBGyg",
    authDomain: "macetas-58812.firebaseapp.com",
    projectId: "macetas-58812",
    storageBucket: "macetas-58812.appspot.com",
    messagingSenderId: "482419678042",
    appId: "1:482419678042:web:cb89d44ccd954d4b11f163"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <React.StrictMode> */
    <App />
/*   </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
