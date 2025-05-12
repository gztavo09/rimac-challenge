import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://rimac-front-end-challenge.netlify.app/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})
