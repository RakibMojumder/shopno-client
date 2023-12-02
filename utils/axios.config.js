import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: {
        authorization: `Bearer ${Cookies.get('token')}`
    }
});

export default instance;