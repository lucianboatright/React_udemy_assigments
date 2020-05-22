import React, { Component } from 'react';
import UserInput from './UserInput/userInput'
import UserOutput from './UserOutput/userOutput'

import './App.css';

class App extends Component {

  state = { 
    inputText: 'Text to be Replaced' 
  }
  
  wordInputHandeler = (event) => {
    this.setState (
        {inputText: event.target.value},
    )
  }

  render () {
    
    return (
      <div className="App">
        <h1>User input below</h1>
        <UserInput
          changed={this.wordInputHandeler}
        />
        <h1>User Output below</h1>
        <UserOutput inputText={this.state.inputText} /> 
        <UserOutput inputText={this.state.inputText} /> 
      </div>
    );

  }
}
export default App;
