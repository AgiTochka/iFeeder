import axios from 'axios';

export default axios.create({
    baseURL: 'http://http://109.229.70.66:220',
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
    }
});