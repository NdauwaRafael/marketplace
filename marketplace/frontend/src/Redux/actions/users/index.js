import {
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILED,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_FAILED
} from '../../constants/actionTypes';
import * as userAPI from '../../constants/API/users';
import {tokenConfig} from '../config';

//ADD
export const addUserSuccess = (user) => {
    return {
        type: ADD_USER_SUCCESS,
        user
    }
};

export const addUserFailed = (error) => {
    return {
        type: ADD_USER_FAILED,
        error
    }
};

//UPDATE
export const updateUserSuccess = (user) => {
    return {
        type: UPDATE_USER_SUCCESS,
        user
    }
};

export const updateUserFailed = (error) => {
    return {
        type: UPDATE_USER_FAILED,
        error
    }
};

export const addUser = (user) => (dispatch, getState) => {
    if (user.id) {
        userAPI.updateUserAPI()(user, tokenConfig(getState))
            .then(resp => {
                dispatch(updateUserSuccess(resp.data))
            })
            .catch(error => {
                if (error.response){
                    dispatch(updateUserFailed(error.response.data))
                }
            })

    } else {
        userAPI.addUserAPI(user, tokenConfig(getState))
            .then(resp => {
                dispatch(addUserSuccess(resp.data))
            })
            .catch(error => {
                if (error.response){
                    console.log(error.response);
                    dispatch(addUserFailed(error.response.data));
                }
            })
    }
};


//LOAD
export const loadUsersSuccess = (users) => {
    return {
        type: LOAD_USERS_SUCCESS,
        users
    }
};

export const loadUsersFailed = (error) => {
    return {
        type: LOAD_USERS_FAILED,
        error
    }
};

export const loadUsers = () => (dispatch, getState) => {
    userAPI.loadUsersAPI(tokenConfig(getState))
        .then(resp=>{
            dispatch(loadUsersSuccess(resp.data))
        })
        .catch(error=>{
            if (error.response){

            }
        })
};


//DELETE
export const deleteUserSuccess = (id) => {
    return {
        type: DELETE_USER_SUCCESS,
        id
    }
};

export const deleteUserFailed = (error) => {
    return {
        type: DELETE_USER_FAILED,
        error
    }
};

export const deleteUser = (id) => (dispatch, getState) => {
    userAPI.deleteUserAPI(id, tokenConfig(getState))
        .then(resp=>{
            dispatch(deleteUserSuccess(id))
        })
        .catch(error=>{
            if (error.response){

            }
        })
};
