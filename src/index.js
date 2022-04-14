import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/store';
import { ReactNotifications } from 'react-notifications-component';

import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';
import 'react-notifications-component/dist/theme.css'

ReactDOM.render(
  <Provider store={store}>
      <ReactNotifications />
      <App />
  </Provider>,
   document.getElementById('root')
);
