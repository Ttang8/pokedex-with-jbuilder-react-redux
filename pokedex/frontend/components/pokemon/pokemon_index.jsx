import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    return (
      <ul>
        {this.props.pokemon.map((pokemon) => (
          <figure>
            <li>{pokemon.name}</li>
            <img src={pokemon.image_url}></img>
          </figure>
          )
        )
      }
      </ul>
    );
  }
}

export default PokemonIndex;
