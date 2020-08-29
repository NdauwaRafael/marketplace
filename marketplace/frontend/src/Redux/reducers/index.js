import { combineReducers } from 'redux';
import produces from './produces';
import auth from './auth';
import users from './users';
import ui from './ui'

export default combineReducers({
    produces,
    auth,
    users,
    ui
})
