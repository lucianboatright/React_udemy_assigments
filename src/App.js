import React, { Component } from 'react';
import Validation from "./ValidationComponent/validationComponent"


import './App.css';
// import validation from './ValidationComponent/validationComponent';

class App extends Component {
  state = {
    userInput: ''
  }
  inputChangeHandler = (event) => {
    this.setState(
      {userInput: event.target.value}
  )}

  // wordInputHandeler = (event) => {
  //   this.setState (
  //       {inputText: event.target.value}
  //   )
  // }

  render () {

    // if (this.state.inputText.length) comment 
    
    return (
      <div className="App">
        <h1>User input below</h1>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}>
        </input>
        <p>
          {this.state.userInput}
        </p>
        <Validation inputLength={this.state.userInput.length} />
        {/* <UserInput
          changed={this.wordInputHandeler}
        />
        <h1>User Output below</h1>
        <UserOutput inputText={this.state.inputText} /> 
        <UserOutputLength inputText={this.state.inputText} />  */}
      </div>
    );

  }
}
export default App;
