import React from 'react';
import styles from './sideBarCart.module.sass'
import CartNotEmpty from '../CartNotEmpty';
import CartIsEmpty from '../CartIsEmpty';
import {Props} from '../Header';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {cartTotalPrice} from '../../redux/slices/cartSlice';

const SideBarCart = ({isOpenCart}:Props) => {
    const totalPrice = useSelector(cartTotalPrice)

    const location = useLocation();
    const isOrderingPage = location.pathname === '/ordering'

    const isCartEmpty = totalPrice === 0;

    return (
        <div className={isOpenCart ? styles.active : styles.wrapper}>
            {
                isCartEmpty ?  <CartIsEmpty/> : <CartNotEmpty isOrderingPage={isOrderingPage}/>
            }
        </div>
    );
};

export default SideBarCart;