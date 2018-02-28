import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lockActions from '../actions/lockActions';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.props.lockActions.InitStore();
  }
  handleClick = keyVal => {
    if (keyVal) {
      debugger;
      console.log('clcikeddd! - ' + keyVal);
      this.props.lockActions.updateCurrentInput(keyVal);
    }
  };
  clearContent = keyVal => {
    if (keyVal) {
      debugger;
      console.log('clcikeddd! - ' + keyVal);
      this.props.lockActions.clearCurrentInput(keyVal);
    }
  };
  enterValue = keyVal => {
    if (keyVal && this.props.lkStore.lock.locked) {
      debugger;
      console.log('clcikeddd! - ' + keyVal);
      this.props.lockActions.validateCurrentInput(this.props.lkStore.lock.currentInput);
    }else if(keyVal && !this.props.lkStore.lock.locked){
      this.props.lockActions.updateCurrentPin(this.props.lkStore.lock.currentInput);
    }
  };
  render() {
    return (
      <div className="App">
        <div className="buttonPanel">
          <div>
            <button onClick={() => this.clearContent('clr')}>Clr</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('1')}>1</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('2')}>2</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('3')}>3</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('4')}>4</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('5')}>5</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('6')}>6</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('7')}>7</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('8')}>8</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('9')}>9</button>
          </div>
          <div>
            <button onClick={() => this.handleClick('0')}>0</button>
          </div>
          <div>
            <button onClick={() => this.enterValue('Enter')}>Enter</button>
          </div>
        </div>
        <div className="displayPanel">
          <div>
            Display:{' '}
            {this.props.lkStore.lock.currentInput === ''
              ? '****'
              : this.props.lkStore.lock.currentInput}
          </div>
          <div>
            Locked Indicator:{' '}
            {this.props.lkStore.lock.locked ? 'locked' : 'unlocked'}
          </div>
          <div>
            {this.props.lkStore.lock.valid ? '' : 'INVALID'}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    lkStore: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    lockActions: bindActionCreators(lockActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
