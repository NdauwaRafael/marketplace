/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 8/29/2020 at 1:44 PM
 **/
import {
    LOAD_PRODUCE_SUCCESS,
    LOAD_PRODUCE_FAILED,
    ADD_PRODUCE_SUCCESS,
    ADD_PRODUCE_FAILED,
    UPDATE_PRODUCE_FAILED,
    UPDATE_PRODUCE_SUCCESS,
} from '../../constants/actionTypes';
import * as produceAPI from '../../constants/API/produce'
import {tokenConfig} from '../config';

//ADD
export const addProduceSuccess = (produce) => {
    return {
        type: ADD_PRODUCE_SUCCESS,
        produce
    }
};

export const addProduceFailed = (error) => {
    return {
        type: ADD_PRODUCE_FAILED,
        error
    }
};

//UPDATE
export const updateProduceSuccess = (produce) => {
    return {
        type: UPDATE_PRODUCE_SUCCESS,
        produce
    }
};

export const updateProduceFailed = (error) => {
    return {
        type: UPDATE_PRODUCE_FAILED,
        error
    }
};


//LOAD
export const loadProduceSuccess = (produces) => {
    return {
        type: LOAD_PRODUCE_SUCCESS,
        produces
    }
};

export const loadUsersFailed = (error) => {
    return {
        type: LOAD_PRODUCE_FAILED,
        error
    }
};

export const addProduce = (produce) => (dispatch, getState) => {
    if (produce.id) {
        produceAPI.updateProduceApi()(produce, tokenConfig(getState))
            .then(resp => {
                dispatch(updateProduceSuccess(resp.data))
            })
            .catch(error => {
                if (error.response) {
                    dispatch(updateProduceFailed(error.response.data))
                }
            })

    } else {
        produceAPI.addProduceApi(produce, tokenConfig(getState))
            .then(resp => {
                dispatch(addProduceSuccess(resp.data))
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                    dispatch(addProduceFailed(error.response.data));
                }
            })
    }
};

export const loadProduces = () => (dispatch, getState) => {
    produceAPI.loadProduceApi(tokenConfig(getState))
        .then(resp=>{
            dispatch(loadProduceSuccess(resp.data))
        })
        .catch(error=>{
            if (error.response){
                dispatch(loadUsersFailed(error.response.data));
            }
        })
};

