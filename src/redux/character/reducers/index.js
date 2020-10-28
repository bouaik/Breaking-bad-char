import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  filter: filterReducer,
});

export default rootReducer;
