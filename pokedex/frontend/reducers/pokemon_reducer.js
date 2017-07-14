import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import React from 'react';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return {entities: action.pokemon};
    case RECEIVE_SINGLE_POKEMON:
      let dup = merge({}, state);
      dup.entities[action.pokemon.poke.id] = action.pokemon.poke;
      return merge({}, dup, {currentPokeId: action.pokemon.poke.id});
    default:
      return state;
  }
};

export default pokemonReducer;
