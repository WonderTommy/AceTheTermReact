import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { ChangeValueTypes, IChangeValue, ILogged, LoggedTypes, store } from "./redux-components";
// import { Action } from 'redux';

// STORE -> GLOBALIZED STATE

// ACTION INCREMENT
const increment: () => IChangeValue = () => {
  return {
    type: ChangeValueTypes.Increment,
    value: 1
  }
};

const decrement: () => IChangeValue = () => {
  return {
    type: ChangeValueTypes.Decrement,
    value: 2
  }
};

const signin: () => ILogged = () => {
  return {
    type: LoggedTypes.SIGN_IN,
  }
}

const signout: () => ILogged = () => {
  return {
    type: LoggedTypes.SIGN_OUT,
  }
}


// REDUCER

store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(signin());
store.dispatch(signout());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
