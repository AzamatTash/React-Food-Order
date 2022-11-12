import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type CartItem = {
    id?: string;
    image: string;
    title: string;
    price: number;
    quantityValue: number;
};
type CartState = {
    items: CartItem[];
    totalPrice: number;
};

const initialState:CartState = {
    items: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem: (state, action:PayloadAction<CartItem>) => {
            const findItem = state.items.find(item => item.id === action.payload.id);

            if (findItem) {
                findItem.quantityValue++;
            } else {
                state.items.push(action.payload);
            }

            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantityValue, 0);
        },
        minusCartItem: (state, action:PayloadAction<string | undefined>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload);

            if (findItem) {
                findItem.quantityValue--;
            }

            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantityValue, 0);
        },
        removeCartItem: (state, action:PayloadAction<string | undefined>) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantityValue, 0);
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