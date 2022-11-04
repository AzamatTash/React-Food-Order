import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {api} from '../../axios';
import {RootState} from '../store';
import {ParamsType} from '../../Pages/ProductsList';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (params:ParamsType) => {
        const {path, sortType, orderType} = params;
        const {data} = await api.getProducts(path, sortType, orderType);
        return data;
    }
);

type ProductState = {
    id: string;
    title: string;
    image: string;
    weight: number;
    quantity?: number;
    composition?: string
    price: number;
};

type ProductsState = {
    items: ProductState[];
    status: string;
};

const initialState:ProductsState = {
    items: [
        {
            id: '',
            title: '',
            image: '',
            weight: 0,
            quantity: 0,
            composition: '',
            price: 0,
        }
    ],
    status: 'loading'
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending.toString()]: (state:ProductsState) => {
            state.items = [];
            state.status = 'loading';
        },
        [fetchProducts.fulfilled.toString()]: (state:ProductsState, action:PayloadAction<ProductState[]>) => {
            state.items = action.payload;
            state.status = 'loaded';
        },
        [fetchProducts.rejected.toString()]: (state:ProductsState) => {
            state.items = [];
            state.status = 'error';
        },
    }
});

export const productsList = (state:RootState) => state.products;
const products = productsSlice.reducer;
export default products;