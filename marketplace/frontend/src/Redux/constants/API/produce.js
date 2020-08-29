/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 8/29/2020 at 1:48 PM
 **/
import axios from "axios";

export const loadProduceApi = (config) => {
    return axios.get('api/produce', config);
};

export const addProduceApi = (produce, config) => {
    return axios.post('api/produce/', produce, config);
};

export const updateProduceApi = (produce, config)=>{
    return axios.put(`api/produce/${produce.id}/`, produce, config)
};
