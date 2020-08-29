import {
    LOAD_CLIENTS_SUCCESS,
    LOAD_CLIENTS_FAILED,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_FAILED
} from '../../constants/actionTypes';

const initialState = {
    clients: [],
    getClientsError: '',
    addClientError: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENT_SUCCESS:
            return {
                ...state,
                clients: [...state.clients, action.client]
            };
        case ADD_CLIENT_FAILED:
            return {
                ...state,
                addClientError: action.error
            };
        case LOAD_CLIENTS_SUCCESS:
            return {
                ...state,
                clients: action.clients
            };
        case LOAD_CLIENTS_FAILED:
            return {
                ...state,
                getClientsError: action.error
            };
        default :
            return state;
    }
}