import axios from 'axios';
import { BASE_URL } from '../constants';

const pokeApi = axios.create({
    baseURL: `${BASE_URL}/pokemon`,
});

pokeApi.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export const getPokes = (pokesRequest) => pokeApi.get(`/${pokesRequest}`);
export const getPoke = (pokeId) => pokeApi.get(`/${pokeId}`);
