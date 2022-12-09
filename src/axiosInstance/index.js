import axios from 'axios';
import { getToken } from '../localStorage';
import { baseUrl } from './constant';

const config = {
    baseURL: baseUrl,
    headers: { 'Content-Type': 'application/json' },
};

export const getJWTHeader = () => {
    return { Authorization: `Bearer ${getToken()}` };
};

export const axiosInstance = axios.create(config);
