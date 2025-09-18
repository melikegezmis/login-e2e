import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Login />
  </BrowserRouter>
);