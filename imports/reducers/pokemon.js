import { merge } from 'lodash'
import { FETCH_POKEMON, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR } from '../actions/pokemon'

const initialState = {
  pokemon: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON:
      return merge({}, {
        loading: true
      })
    case FETCH_POKEMON_SUCCESS:
      return merge({}, {
        loading: false,
        pokemon: action.pokemon
      })
    case FETCH_POKEMON_SUCCESS:
      return merge({}, {
        loading: false,
        error: action.error
      })
  }
  return state
}
