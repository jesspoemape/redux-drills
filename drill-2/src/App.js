import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.currentGuestList.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="">Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input type="" className=""/>
          <button type="" className="">Add</button>
        </div>
      </div>
    );
  }
}

// mapStateToProps here we choose what parts of state we want to put on props for this component
function mapStateToProps( state ) {
  return {
    currentGuestList: state.currentGuests
  }
}

//connect
export default connect( mapStateToProps )(App);
