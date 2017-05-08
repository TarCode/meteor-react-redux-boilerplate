import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar'
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
      <List>
        {
          loading ?
          'loading...' :
          (pokemon && pokemon.length > 0 ?
            pokemon.map((p, id) => (
              <ListItem key={id} primaryText={p.name}
                leftAvatar={<Avatar>{id+1}</Avatar>}
              />
            )) :
            <ListItem primaryText="No Pokemon"/>
          )
        }
      </List>
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
