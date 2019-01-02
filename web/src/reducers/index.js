import { combineReducers } from 'redux';
import mapReducer from './map_reducer';


const rootReducer = combineReducers({
  map: mapReducer,
});

export default rootReducer;