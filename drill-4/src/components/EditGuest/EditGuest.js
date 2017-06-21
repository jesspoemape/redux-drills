import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateGuest} from './../../ducks/guestList';
import './EditGuest.css';

class EditGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.guest
    }
    this.update = this.update.bind(this);
  }


  update() {
    this.props.updateGuest(this.props.index, this.state.text);
    this.props.hide();
  }

  handleChange(e) {
    this.setState({
      text: e
    });
  }



  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <input
            value={this.state.text}
            onChange={ (e) => this.handleChange(e.target.value) }
            className="modal-input"/>
          <button
            type=""
            className="modal-btn"
            onClick={ () => this.update(this.props.guest) }
            >Update</button>
          <button
            onClick={this.props.hide}
            type=""
            className="modal-btn">Cancel</button>
        </div>
      </div>
    )
  }
}


export default connect(null, {updateGuest})(EditGuest);
