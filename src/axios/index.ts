import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://634e38914af5fdff3a560d97.mockapi.io/'
});

export const api = {
    getProducts(params:string) {
        return instance.get(`${params}`);
    }
};