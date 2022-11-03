import React from 'react';
import styles from './footerBar.module.sass';
import menuIcon from '../../assets/img/menu-icon.svg';
import cartIcon from '../../assets/img/cart-icon.svg';
import reviewsIcon from '../../assets/img/reviews-icon.svg';
import {Link} from 'react-router-dom';

const FooterBar = () => {
    return (
        <div className={styles.wrapper}>
            <Link to='/' className={styles.item}>
                <img src={menuIcon} alt='меню'/>
                <div className={styles.title}>Меню</div>
            </Link>
            <Link to='/cart' className={styles.item}>
                <img src={cartIcon} alt='козина'/>
                <div className={styles.title}>Корзина</div>
            </Link>
            <Link to='/reviews' className={styles.item}>
                <img src={reviewsIcon} alt='Отзывы'/>
                <div className={styles.title}>Отзывы</div>
            </Link>
        </div>
    );
};

export default FooterBar;