import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './components/NavBar';
import Home from './components/HomePage.js';
import Footer from './components/Footers/Footer.js';
import Container from './components/Footers/Footer.js';


ReactDOM.render(
  <React.StrictMode>
    
      <div><ResponsiveAppBar/></div>
      <div><Home/></div>
  
      <div><Footer/></div>
    
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
