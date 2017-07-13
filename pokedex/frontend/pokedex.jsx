import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon, requestSinglePokemon, receiveSinglePokemon} from './actions/pokemon_actions';
import configureStore from './store/store.js';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  window.store = store;


// for testing purposes only!!!
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
