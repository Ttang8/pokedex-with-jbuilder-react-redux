import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

 const mapStateToProps = state => {
   if (state.pokemon.entities === undefined) {
     return {pokemon: []};
   }
   return {
     pokemon: selectAllPokemon(state.pokemon.entities)
   };
};

 const mapDispatchToProps = dispatch => ({
   requestAllPokemon: () => dispatch(requestAllPokemon())
 });


 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(PokemonIndex);
