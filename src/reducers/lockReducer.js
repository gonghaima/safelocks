import initialState from './initialState';
import {
  UPDATE_CURRENT_INPUT,
  CLEAR_CURRENT_INPUT,
  VALIDATE_CURRENT_INPUT,
  UPDATE_LOCKSTATUS,
  UPDATE_CURRENT_PIN,
  INIT_STORE
} from '../actions/actionTypes';

export default function lock(state = initialState, action) {
  switch (action.type) {
    case INIT_STORE:
      console.log('INIT_STORE Action');
      return state;
    case UPDATE_CURRENT_INPUT:
      debugger;
      if (state.currentInput.length < 4) {
        // let newState = Object.assign({}, state);
        let newState = Object.assign({}, state);
        newState.currentInput += action.newInputData;
        return newState;
      } else {
        console.log('UPDATE_CURRENT_INPUT Action');
        return state;
      }
    case CLEAR_CURRENT_INPUT:
      // newState = action.stuffApiData;
      console.log('CLEAR_CURRENT_INPUT Action');
      let newState = Object.assign({}, state);
      newState.currentInput = '';
      return newState;
    case VALIDATE_CURRENT_INPUT:
      // newState = action.stuffApiData;
      console.log('VALIDATE_CURRENT_INPUT Action');
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
    case UPDATE_LOCKSTATUS:
      // newState = action.stuffApiData;
      console.log('UPDATE_LOCKSTATUS Action');
      return state;
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
