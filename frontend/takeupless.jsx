import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {hashHistory} from 'react-router'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}, errors: []};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  window.store=store;
});
