import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  handleClick = () => {
    console.log('clcikeddd!');
  };
  render() {
    return (
      <div className="App">
        <div className="buttonPanel">
          <div>
            <button onClick={this.handleClick} name="1">
              1
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="2">
              2
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="3">
              3
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="4">
              4
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="5">
              5
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="6">
              6
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="7">
              7
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="8">
              8
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="9">
              9
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} name="0">
              0
            </button>
          </div>
        </div>
        <div className="displayPanel">
        <div>Display</div>
        <div>Indicator</div>
        </div>
      </div>
    );
  }
}

export default App;
