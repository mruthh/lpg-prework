import { combineReducers } from 'redux';
import timeReducer from './reducer-time';

const rootReducer = combineReducers({
  remainingTime: timeReducer
});

export default rootReducer;