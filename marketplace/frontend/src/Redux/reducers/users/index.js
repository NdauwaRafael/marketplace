import {
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    DELETE_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_FAILED
} from '../../constants/actionTypes';

const initialState = {
    users: [],
    addUserError: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.user]
            };
        case UPDATE_USER_FAILED:
        case ADD_USER_FAILED:
            return {
                ...state,
                addUserError: action.error
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                users: [
                    ...state.users.filter(user => user.id !== action.user.id),
                    Object.assign({}, action.user)
                ]
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            };
        default :
            return state
    }
}