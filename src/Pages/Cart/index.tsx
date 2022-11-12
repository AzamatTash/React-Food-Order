import React from 'react';
import CartIsEmpty from '../../components/CartIsEmpty';
import CartNotEmpty from '../../components/CartNotEmpty';
import {useSelector} from "react-redux";
import {cartTotalPrice} from "../../redux/slices/cartSlice";

const Cart = () => {
    const totalPrice = useSelector(cartTotalPrice);

    React.useEffect(() => window.scrollTo(0,0));

    const cartIsEmpty = totalPrice === 0;
    return (
        <div>
            {
                cartIsEmpty ? <CartIsEmpty/> : <CartNotEmpty isOrderingPage={false}/>
            }
        </div>
    );
};

export default Cart;