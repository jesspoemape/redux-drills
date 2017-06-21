import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addGuest, removeGuest} from './ducks/guestList';
import EditGuest from './components/EditGuest/EditGuest';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


handleChange(e) {
  this.setState({
    userInput: e
  })
}

handleClick() {
  this.props.addGuest(this.state.userInput);
  this.setState({
    userInput: ''
  });
}


  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="" onClick={ this.props.removeGuest.bind(this, i) }>Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input type="" className="" value={this.state.userInput} onChange={ e => this.handleChange(e.target.value) }/>
          <button type="" className="" onClick={ this.handleClick }>Add</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

export default connect(mapStateToProps, {addGuest, removeGuest})(App);
