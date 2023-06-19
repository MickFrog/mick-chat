import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import SignUp from './components/SignUp/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);
