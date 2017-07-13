import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import React from 'react';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      let poke = { entities: action.pokemon.poke, currentPoke: action.pokemon.poke.id};
      return poke;
    default:
      return state;
  }
};

export default pokemonReducer;
