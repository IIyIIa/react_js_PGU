// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userReducer from './reducers/userReducer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(userReducer); // Создание хранилища Redux

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
