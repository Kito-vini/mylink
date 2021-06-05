import axios from 'axios';

//key eeabdd6942d7387eaf92a46470f2a1bb63a4683c

//base url: https://api-ssl.bitly.com/v4/

export const key = 'eeabdd6942d7387eaf92a46470f2a1bb63a4683c';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'content-Type' : 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;