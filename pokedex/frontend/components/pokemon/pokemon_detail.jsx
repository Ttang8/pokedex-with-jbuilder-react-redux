import React from 'react';

class PokemonDetail extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props = newProps;
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render () {
    console.log(this.props);
    return (
      <div className='stats'>
        <img className='statpic' src={this.props.currentPoke.image_url}></img>
        <p>{this.props.currentPoke.name}</p>
        <p>Attack:{this.props.currentPoke.attack}</p>
        <p>Defense:{this.props.currentPoke.defense}</p>
      </div>
    );
  }
}

export default PokemonDetail;
