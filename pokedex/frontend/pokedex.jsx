import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store.js';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  const store = configureStore();
  window.store = store;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

// for testing purposes only!!!
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
