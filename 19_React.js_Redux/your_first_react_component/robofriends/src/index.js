import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// or
// import App from './App.js';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    <Hello greeting={'Hello,' + ' ' + 'React Ninja!'} />
    {/* <h1>Hello, World!</h1> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
