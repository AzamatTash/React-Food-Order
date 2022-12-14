import React from 'react';
import styles from './sideBarCart.module.sass'
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

import CartNotEmpty from '../CartNotEmpty';
import CartIsEmpty from '../CartIsEmpty';
import {PropsTypes} from '../Header';
import {cartTotalPrice} from '../../redux/slices/cartSlice';

const SideBarCart = ({isOpenCart, setIsOpenCart}:PropsTypes) => {
    const totalPrice: number = useSelector(cartTotalPrice);
    const location = useLocation();
    const isOrderingPage: boolean = location.pathname === '/ordering'
    const isCartEmpty: boolean = totalPrice === 0;

    return (
        <div className={isOpenCart ? styles.active : styles.wrapper}>
            {
                isCartEmpty ?  <CartIsEmpty/> :
                    <CartNotEmpty isOrderingPage={isOrderingPage} setIsOpenCart={setIsOpenCart}/>
            }
        </div>
    );
};

export default SideBarCart;