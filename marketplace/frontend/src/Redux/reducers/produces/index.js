import {
    LOAD_PRODUCE_SUCCESS,
    LOAD_PRODUCE_FAILED,
    ADD_PRODUCE_SUCCESS,
    ADD_PRODUCE_FAILED,
    UPDATE_PRODUCE_FAILED,
    UPDATE_PRODUCE_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
    produces: [],
    errors: {},
    loading: false,
    saving: false,
    addProduceErrors: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCE_SUCCESS:
            return {
                ...state,
                produces: action.produces
            };
        case LOAD_PRODUCE_FAILED:
            return {};
        case ADD_PRODUCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                produces: [...state.produces, action.produce]
            };
        case ADD_PRODUCE_FAILED:
            return {
                ...state,
                addProduceErrors: action.error
            };
        case UPDATE_PRODUCE_SUCCESS:
            return {
                ...state,
                users: [
                    ...state.produces.filter(produce => produce.id !== action.produce.id),
                    Object.assign({}, action.produce)
                ]
            };
        default:
            return state;
    }
}
