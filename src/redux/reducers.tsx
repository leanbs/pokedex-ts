import { combineReducers } from 'redux';
import AppReducer from './module/app'

export default combineReducers({
  app: AppReducer
});