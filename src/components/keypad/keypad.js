import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lockActions from '../../actions/lockActions';

class Keypad extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
        this.enterValue = this.enterValue.bind(this);
        this.clearContent = this.clearContent.bind(this);
    };
    handleClick = keyVal => {
        if (keyVal) {
            this.props.lockActions.updateCurrentInput(keyVal);
        }
    };
    enterValue = keyVal => {
        if (keyVal && this.props.lkStore.lock.locked) {
            this.props.lockActions.validateCurrentInput(
                this.props.lkStore.lock.currentInput
            );
        } else if (keyVal && !this.props.lkStore.lock.locked) {
            this.props.lockActions.updateCurrentPin(
                this.props.lkStore.lock.currentInput
            );
        }
    };
    clearContent = keyVal => {
        if (keyVal) {
            this.props.lockActions.clearCurrentInput(keyVal);
        }
    };
    render() {
        return (
            <div className="buttonPanel col-md-6">
                <div className="keypad">
                    <div className="row">
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('1')}
                            >
                                1
                  </button>
                        </div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('2')}
                            >
                                2
                  </button>
                        </div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('3')}
                            >
                                3
                  </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('4')}
                            >
                                4
                  </button>
                        </div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('5')}
                            >
                                5
                  </button>
                        </div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('6')}
                            >
                                6
                  </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('7')}
                            >
                                7
                  </button>
                        </div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('8')}
                            >
                                8
                  </button>
                        </div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('9')}
                            >
                                9
                  </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.clearContent('clr')}
                            >
                                CLR
                  </button>
                        </div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.handleClick('0')}
                            >
                                0
                  </button>
                        </div>
                        <div className="col-sm-4">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => this.enterValue('Enter')}
                            >
                                =>
                  </button>
                        </div>
                    </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Keypad);