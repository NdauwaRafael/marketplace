import { combineReducers } from 'redux';
import produces from './produces';
import auth from './auth';
import users from './users';

export default combineReducers({
    produces,
    auth,
    users
})
