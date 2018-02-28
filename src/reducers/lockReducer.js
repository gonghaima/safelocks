import initialState from './initialState';
import { UPDATE_CURRENT_INPUT, UPDATE_LOCKSTATUS, UPDATE_CURRENT_PIN } from '../actions/actionTypes';

export default function lockReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case UPDATE_CURRENT_INPUT:
            console.log('UPDATE_CURRENT_INPUT Action')
            return action;
        case UPDATE_LOCKSTATUS:
            // newState = action.stuffApiData;
            console.log('UPDATE_LOCKSTATUS Action')
            return newState;
        case UPDATE_CURRENT_PIN:
            console.log('UPDATE_CURRENT_PIN Action')
            return state;
        default:
            return state;
    }
}