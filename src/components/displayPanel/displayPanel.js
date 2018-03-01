import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lockActions from '../../actions/lockActions';

class DisplayPanel extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="display"> {this.displayText()} </div>{' '}
        <div className={this.indicatorStatus()} />{' '}
      </div>
    );
  }

  indicatorStatus() {
    return this.props.lkStore.lock.locked
      ? 'indicator locked'
      : 'indicator unlocked';
  }

  displayText() {
    const safeLockStatus = this.props.lkStore.lock;

    return !safeLockStatus.valid
      ? 'INVALID'
      : safeLockStatus.currentInput === '' ? '' : safeLockStatus.currentInput;
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPanel);
