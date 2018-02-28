import React, { Component } from 'react';
import './App.css';
import Keypad from './keypad/keypad';
import DisplayPanel from './displayPanel/displayPanel';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lockActions from '../actions/lockActions';

class App extends Component {
  
  componentWillMount() {
    this.props.lockActions.InitStore();
  }

  render() {
    return (
      <div className="safe-lock">
        <div className="row">
          
            <Keypad/>
          <DisplayPanel/>
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
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
