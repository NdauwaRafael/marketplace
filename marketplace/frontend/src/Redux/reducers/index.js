import { combineReducers } from 'redux';
import records from './records';
import clients from './clients';
import auth from './auth';
import users from './users';

export default combineReducers({
    records,
    clients,
    auth,
    users
})