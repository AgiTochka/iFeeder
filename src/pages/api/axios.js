import axios from 'axios';

export default axios.create({
    baseURL: 'https://psbit.ru',
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
    }
});