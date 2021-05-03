import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { myAction } from './redux/actions';

// import reportWebVitals from './reportWebVitals';
console.log(store);
console.log(store.dispatch(myAction(5)));
console.log(store.dispatch(myAction(10)));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
