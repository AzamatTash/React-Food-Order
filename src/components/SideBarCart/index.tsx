import React from 'react';
import styles from './sideBarCart.module.sass'
import CartNotEmpty from '../CartNotEmpty';
import CartIsEmpty from '../CartIsEmpty';
import {Props} from '../Header';
import {useLocation} from 'react-router-dom';

const SideBarCart = ({isOpenCart}:Props) => {
    const location = useLocation();
    const isOrderingPage = location.pathname === '/ordering'

    const isCartEmpty = true;
    return (
        <div className={isOpenCart ? styles.active : styles.wrapper}>
            {
                isCartEmpty ?  <CartIsEmpty/> : <CartNotEmpty isOrderingPage={isOrderingPage}/>
            }
        </div>
    );
};

export default SideBarCart;