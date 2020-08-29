import { LOAD_RECORDS_SUCCESS } from '../../constants/actionTypes';

const initialState = {
    records: [
        {
            id: 0,
            date: '22-07-2019',
            name: 'John Amoth',
            procedure: 'Extraction',
            amount: '1000',
            prescription: ''
        },
        {
            id: 1,
            date: '22-07-2019',
            name: 'Willy Njoroge',
            procedure: 'FMS',
            amount: '300',
            prescription: ''
        },
        {
            id: 2,
            date: '23-07-2019',
            name: 'Larry Otieno',
            procedure: 'Checkup',
            amount: '',
            prescription: ''
        },
        {
            id: 2,
            date: '24-07-2019',
            name: 'Pauline Mukami',
            procedure: 'Checkup',
            amount: '',
            prescription: ''
        },
        {
            id: 2,
            date: '25-07-2019',
            name: 'Nancy Wambui',
            procedure: 'Checkup',
            amount: '300',
            prescription: ''
        }
    ],
    errors: {},
    loading: false,
    saving: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RECORDS_SUCCESS:
            return {
                ...state,
                records: action.records
            }
        default:
            return state;
    }
}