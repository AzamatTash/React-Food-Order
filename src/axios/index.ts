import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://634e38914af5fdff3a560d97.mockapi.io/'
});

export const api = {
    getProducts(path:string, sortType:string, orderType:string) {
        return instance.get(`${path}?sortBy=${sortType}&order=${orderType}`);
    },
    getProduct(path:string) {
        return instance.get(`${path}`);
    }
};