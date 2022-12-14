import axios, {AxiosResponse} from 'axios';
import {ProductState} from '../redux/slices/productsSlice';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const api = {
    getProducts(path:string, sortType:string, orderType:string, searchValue:string):Promise<AxiosResponse<ProductState[]>> {
        return instance.get<ProductState[]>(`${path}?sortBy=${sortType}&order=${orderType}&title=${searchValue}`);
    },
    getProduct(path:string):Promise<AxiosResponse<ProductState>> {
        return instance.get<ProductState>(`${path}`);
    }
};