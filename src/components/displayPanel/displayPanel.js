import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lockActions from '../../actions/lockActions';

class DisplayPanel extends Component {
    constructor(props, context) {
        super(props, context);
    };
    render() {
        return (
            <div className="col-md-6">
            <div className="display">
              {!this.props.lkStore.lock.valid?"INVALID":(this.props.lkStore.lock.currentInput === ''
                ? ''
                : this.props.lkStore.lock.currentInput)}
            </div>
            <div
              className={
                this.props.lkStore.lock.locked
                  ? 'indicator locked'
                  : 'indicator unlocked'
              }
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPanel);