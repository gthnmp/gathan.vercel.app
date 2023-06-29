/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './component/utils/css/animation.css'
import  { StateProvider }  from './states.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StateProvider>
      <App />
    </StateProvider>
);
