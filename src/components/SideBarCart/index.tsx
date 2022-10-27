import React from 'react';
import styles from './sideBarCart.module.sass'
import Cart from '../Cart';
import {Props} from '../Header';

const SideBarCart = ({isOpenCart}:Props) => {
    const isCartEmpty = false;
    return (
        <div className={isOpenCart ? styles.active : styles.wrapper}>
            {
                isCartEmpty ?
                <>
                    <div className={styles.title}>Выша корзина пуста.</div>
                    <div className={styles.subTitle}>Добавте же скорее что-нибудь!</div>
                    <div className={styles.orderPrice}>Бесплатная доставка от 800 руб.</div>
                </> :
                <Cart/>
            }
        </div>
    );
};

export default SideBarCart;