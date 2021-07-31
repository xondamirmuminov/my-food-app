import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './style';
import { Provider } from 'react-redux';
import store, { persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
