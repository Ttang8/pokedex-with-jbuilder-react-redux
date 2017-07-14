import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import {Route} from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    const pokemonItems = this.props.pokemon.map(pokemon => <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />);
    return (
      <div>
        <div className='stats'>
          <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
        </div>
        <ul className='allpoke'>
          {pokemonItems}
        </ul>

      </div>
    );
  }
}

export default PokemonIndex;
