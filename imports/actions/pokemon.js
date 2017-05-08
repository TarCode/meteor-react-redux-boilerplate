import { HTTP } from 'meteor/http'

export const FETCH_POKEMON = "FETCH_POKEMON"
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR"

const url = 'https://pokeapi.co/api/v2/pokemon'

export function fetchPokemon() {
  dispatch({ type: FETCH_POKEMON })
  HTTP.call('GET', url, (error, result) => {
    if (!error) {
      dispatch({ type: FETCH_POKEMON_SUCCESS, pokemon: result.data.results})
    } else {
      dispatch({ type: FETCH_POKEMON_ERROR, error })
    }
  })
}
