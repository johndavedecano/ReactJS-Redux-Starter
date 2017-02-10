import { combineReducers } from 'redux';
import UserReducer from './users/UserReducer';

const rootReducer = combineReducers({
  users: UserReducer,
});

export default rootReducer;
