import {configureStore} from '@reduxjs/toolkit';
import products from './slices/productsSlice';
import sort from './slices/sortSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        products,
        sort,
        cart
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;