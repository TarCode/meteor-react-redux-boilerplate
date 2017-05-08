import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPokemon } from '../../actions/pokemon'

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPokemon()
  }

  render() {
    const { pokemon, loading } = this.props
    return (
      <div>
        {
          loading ?
          'loading...' :
          (pokemon && pokemon.length > 0 ?
            pokemon.map((p, id) => (
              <p key={id}>{p.name}</p>
            )) :
            <p>No pokemon</p>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { pokemon, loading } = state.pokemon
  return {
    pokemon,
    loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemon: bindActionCreators(fetchPokemon, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
