import React from 'react';
import styles from './cartIsEmpty.module.sass';

const CartIsEmpty = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Выша корзина пуста.</div>
            <div className={styles.subTitle}>Добавте же скорее что-нибудь!</div>
            <div className={styles.orderPrice}>Бесплатная доставка от 800 руб.</div>
        </div>
    );
};

export default CartIsEmpty;