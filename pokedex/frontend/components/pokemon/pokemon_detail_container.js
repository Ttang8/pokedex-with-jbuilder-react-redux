import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestSinglePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = state => {
  if (state.pokemon.currentPokeId === undefined) {
    return {currentPoke: {}};
  }
  return {
  currentPoke: state.pokemon.entities[state.pokemon.currentPokeId]
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
