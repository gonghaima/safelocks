import {combineReducers} from 'redux';
import lock from './lockReducer';

const rootReducer = combineReducers({
  lock
});

export default rootReducer;