import React from 'react';
import { Link, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

const PokemonIndexItem = (props) => {
  return (
    <figure>
      <li>
        <Route path={`/pokemon/${props.pokemon.id}`} render={() => <PokemonDetailContainer />} />
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <div>
              <h1>{props.pokemon.name}</h1>
              <img src={props.pokemon.image_url}></img>
            </div>
        </Link>
      </li>
    </figure>
  );
};

export default PokemonIndexItem;
