import React from 'react';
import CartIsEmpty from '../../components/CartIsEmpty';
import CartNotEmpty from '../../components/CartNotEmpty';

const Cart = () => {
    const cartIsEmpty = true;
    return (
        <div>
            {
                cartIsEmpty ? <CartIsEmpty/> : <CartNotEmpty isOrderingPage={false}/>
            }
        </div>
    );
};

export default Cart;