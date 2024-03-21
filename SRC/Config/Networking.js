import axios from 'axios';

const BaseURL = 'https://temp-tadbeer.westeurope.cloudapp.azure.com/workers/api/'
const instance = axios.create({
    baseURL: BaseURL
})

//request interceptor
instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

//response interceptor
instance.interceptors.response.use((response)=>{
    return response
}, (error)=>{
    return Promise.reject(error);
})

class Networking{
    getPackages(){
        return instance.get('packages');
    }
    getCountries(){
        return instance.get('countries')
    }
    getWorkers(){
        return instance.get('workers')
    }
}

export default new Networking()