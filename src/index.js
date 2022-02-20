import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './stores';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
