import {CartItem} from '../redux/slices/cartSlice';

export const calcTotalPrice = (items:CartItem[]) => {
    return items.reduce((sum, item) => sum + item.price * item.quantityValue, 0);
};