import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lockActions from '../../actions/lockActions';
import KeyButton from './button/button'

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
                        {["1", "2", "3"].map(cs => <KeyButton key={cs} name={cs} onClick={() => this.handleClick(cs)} />)}
                    </div>
                    <div className="row">
                        {["4", "5", "6"].map(cs => <KeyButton key={cs} name={cs} onClick={() => this.handleClick(cs)} />)}
                    </div>
                    <div className="row">
                        {["7", "8", "9"].map(cs => <KeyButton key={cs} name={cs} onClick={() => this.handleClick(cs)} />)}
                    </div>
                    <div className="row">
                        <KeyButton key={"CLR"} name={"CLR"} onClick={() => this.clearContent("CLR")} />
                        <KeyButton key={"0"} name={"0"} onClick={() => this.handleClick("0")} />
                        <KeyButton key={"=>"} name={"=>"} onClick={() => this.enterValue("=>")} />
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