import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //Original
// import App from './App';  //Original
import { App } from './App';
// import reportWebVitals from './reportWebVitals'; //Original

ReactDOM.render(
  // <React.StrictMode>  //Original
  <App />,
  // </React.StrictMode>,  //Original
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();  //Original
