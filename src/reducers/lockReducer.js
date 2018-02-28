import initialState from './initialState';
import {
  UPDATE_CURRENT_INPUT,
  CLEAR_CURRENT_INPUT,
  VALIDATE_CURRENT_INPUT,
  UPDATE_CURRENT_PIN,
  INIT_STORE
} from '../actions/actionTypes';

export default function lock(state = initialState, action) {
  switch (action.type) {
    case INIT_STORE:
      return state;
    case UPDATE_CURRENT_INPUT:
      
      if (state.currentInput.length < 4) {
        let newState = Object.assign({}, state);
        newState.currentInput += action.newInputData;
        newState.valid=true;
        return newState;
      } else {
        state.valid=true;
        return state;
      }
    case CLEAR_CURRENT_INPUT:
      let newState3 = Object.assign({}, state);
      newState3.currentInput = '';
      return newState3;
    case VALIDATE_CURRENT_INPUT:
      let newState2 = Object.assign({}, state);
      if(action.inputData===state.currentPin){
        newState2.locked=false;
        newState2.currentPin="";
        newState2.valid=true;
      }else{
        newState2.valid=false;
      }
      newState2.currentInput = '';
      return newState2;
    case UPDATE_CURRENT_PIN:
      console.log('UPDATE_CURRENT_PIN Action');
      let newState1 = Object.assign({}, state);
      newState1.currentPin = action.newPin;
      newState1.currentInput = '';
      newState1.locked=true;
      return newState1;
    default:
      return state;
  }
}
