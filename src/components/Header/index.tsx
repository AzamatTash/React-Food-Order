import React, {useState} from 'react';
import styles from './header.module.sass'
import searchIcon from '../../assets/img/search-icon.svg';
import menuIcon from '../../assets/img/open-menu-icon.svg';
import cartIcon from '../../assets/img/cart-icon.png';
import {Link} from 'react-router-dom';

export type Props = {
    setIsOpenMenu?: any,
    isOpenMenu?: boolean,
    setIsOpenCart?: any,
    isOpenCart?: boolean
}

const Header = ({setIsOpenMenu, setIsOpenCart}:Props) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <img className={styles.menuIcon} src={menuIcon} alt='меню' onClick={() => setIsOpenMenu(true) }/>
                <div>
                    <div className={styles.title}>Наш телефон</div>
                    <a className={styles.phone} href="tel:+996705188955">+996 705 188 955</a>
                    <a className={styles.phone} href="tel:+996555188955">+996 555 188 955</a>
                    <div className={styles.subTitle}>работаем с 10:00 до 00:00</div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.links}>
                    <Link to='/reviews'>Отзывы</Link>
                    <Link to='/ordering'>Доставка и оплата</Link>
                </div>
                {!isActive && <button className={styles.searchIcon} onClick={() => setIsActive(true)}>
                    <img src={searchIcon} alt='Поиск'/>
                </button> }
                {isActive && <form className={styles.form}>
                    <input autoFocus={true} tabIndex={0} onBlur={() => setIsActive(false)}
                           type="text" className={styles.input} placeholder='поиск...'/>
                </form>}
                <img className={styles.cartIcon} src={cartIcon} alt='меню' onClick={() => setIsOpenCart(true) }/>
                <div className={styles.count}>0</div>
            </div>
        </div>
    );
};

export default Header;