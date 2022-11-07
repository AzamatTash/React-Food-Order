import React from 'react';
import styles from './header.module.sass'
import menuIcon from '../../assets/img/open-menu-icon.svg';
import cartIcon from '../../assets/img/cart-icon.svg';
import logoIcon from '../../assets/img/logo-icons.svg';
import iconWatch from '../../assets/img/icon-watch.svg';
import {Link, useNavigate} from 'react-router-dom';

export type Props = {
    setIsOpenMenu?: any,
    isOpenMenu?: boolean,
    setIsOpenCart?: any,
    isOpenCart?: boolean
};

const Header = ({setIsOpenMenu, setIsOpenCart}:Props) => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <img className={styles.menuIcon} src={menuIcon} alt='меню' onClick={() => setIsOpenMenu(true)}/>
                <img className={styles.logoIcon} src={logoIcon} alt='лого' onClick={() => navigate('/')}/>
                <div className={styles.info}>
                    <div className={styles.infoLeft}>
                        <div className={styles.title}>Наш телефон</div>
                        <a className={styles.phone} href="tel:+996705188955">+996 705 188 955</a>
                        <a className={styles.phone} href="tel:+996555188955">+996 555 188 955</a>
                    </div>
                    <div className={styles.infoRight}>
                        <img className={styles.watchIcon} src={iconWatch} alt='time'/>
                        <div className={styles.subTitle}>работаем с 10:00 до 00:00</div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.links}>
                    <Link to='/reviews'>Отзывы</Link>
                    <Link to='/ordering'>Доставка и оплата</Link>
                </div>
                <img className={styles.cartIcon} src={cartIcon} alt='меню' onClick={() => setIsOpenCart(true) }/>
                <div className={styles.count}>0</div>
            </div>
        </div>
    );
};

export default Header;