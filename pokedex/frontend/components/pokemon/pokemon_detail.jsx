import React from 'react';

class PokemonDetail extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(1);
  }

  render () {
    return (
      <div>
        sdafadsfsdf
      </div>
    );
  }
}

export default PokemonDetail;
