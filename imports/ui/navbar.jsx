import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false};
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.setState({open: !this.state.open})
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <AppBar
          title="Pokemon"
          onLeftIconButtonTouchTap={this.handleOpen}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={this.handleOpen}
        >
          <Link to="/"><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
          <Link to="/pokemon"><MenuItem onClick={this.handleClose}>Pokemon</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}
