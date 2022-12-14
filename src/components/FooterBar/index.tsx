import React from 'react';
import styles from './footerBar.module.sass';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import menuIcon from '../../assets/img/menu-icon.svg';
import cartIcon from '../../assets/img/cart-icon.svg';
import reviewsIcon from '../../assets/img/reviews-icon.svg';
import {CartItem, cartItems} from '../../redux/slices/cartSlice';

const FooterBar = () => {
    const items: CartItem[] = useSelector(cartItems);
    const cartIsEmpty: boolean = items.length === 0
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.item} onClick={() => navigate('/')}>
                <img src={menuIcon} alt='меню'/>
                <div className={styles.title}>Меню</div>
            </div>
            <div className={styles.item} onClick={() => navigate('/cart')}>
                <img src={cartIcon} alt='козина'/>
                {!cartIsEmpty && <div className={styles.count}>{items.length}</div>}
                <div className={styles.title}>Корзина</div>
            </div>
            <div className={styles.item} onClick={() => navigate('/reviews')}>
                <img src={reviewsIcon} alt='Отзывы'/>
                <div className={styles.title}>Отзывы</div>
            </div>
        </div>
    );
};

export default FooterBar;