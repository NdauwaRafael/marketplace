import axios from 'axios';

export const loadClientsApi = (token)=>{
    return axios.get('api/clients', token);
};

export const addClientsApi = (client, token)=>{
    return axios.post('api/clients/', client, token);
};