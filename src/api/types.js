import axios from 'axios';
import { BASE_URL } from '../constants';

const typesApi = axios.create({
    baseURL: `${BASE_URL}/type`,
});

typesApi.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export const getTypes = (typesRequest) => typesApi.get(`/${typesRequest}`);
export const getType = (pokeId) => typesApi.get(`/${pokeId}`);

