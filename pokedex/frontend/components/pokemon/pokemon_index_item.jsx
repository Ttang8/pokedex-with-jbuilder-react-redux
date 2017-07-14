import React from 'react';
import { Link } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

const PokemonIndexItem = (props) => {
  return (
    <li>
      <Link to={`/pokemon/${props.pokemon.id}`}>
          <div className='menu'>
            <h1>{props.pokemon.name}</h1>
            <img src={props.pokemon.image_url}></img>
          </div>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
