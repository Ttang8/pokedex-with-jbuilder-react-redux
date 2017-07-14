export const selectAllPokemon = (entities) => {
  return Object.keys(entities).map(id => entities[id]);
};
