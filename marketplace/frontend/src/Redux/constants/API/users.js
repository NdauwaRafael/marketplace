import axios from 'axios';

export const addUserAPI = (user, config)=>{
    return axios.post('api/users/', user, config)
};

export const updateUserAPI = (user, config)=>{
    return axios.put(`api/users/${user.id}/`, user, config)
};

export const deleteUserAPI = (id, config)=>{
    return axios.delete('api/users/'+id, config)
};

export const loadUsersAPI = (config)=>{
    return axios.get('api/users', config)
};

