import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './style';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
