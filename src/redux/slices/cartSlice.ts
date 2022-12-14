import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {getCartFromLS} from '../../utils/getCartFromLS';
import {calcTotalPrice} from '../../utils/calcTotalPrice';

export type CartItem = {
    id?: string;
    pathname: string;
    image: string;
    title: string;
    price: number;
    quantityValue: number;
};
type CartState = {
    items: CartItem[];
    totalPrice: number;
};

const initialState:CartState = getCartFromLS();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem: (state, action:PayloadAction<CartItem>) => {
            const findItem = state.items.find(item => item.id === action.payload.id);
            if (findItem) {
                findItem.quantityValue++;
            } else state.items.push(action.payload);
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusCartItem: (state, action:PayloadAction<string | undefined>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if (findItem) findItem.quantityValue--;
            state.totalPrice = calcTotalPrice(state.items);
        },
        removeCartItem: (state, action:PayloadAction<string | undefined>) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    }
});

export const {setCartItem, minusCartItem, removeCartItem, clearCart} = cartSlice.actions;

export const cartItems = (state:RootState) => state.cart.items;
export const cartTotalPrice = (state:RootState) => state.cart.totalPrice;

const cart = cartSlice.reducer;
export default cart;