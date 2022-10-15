import React, {useState} from 'react';
import styles from './header.module.sass'
import searchIcon from '../../assets/img/search-icon.svg';

const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.title}>Наш телефон</div>
                <a className={styles.phone} href="tel:+996705188955">+996 705 188 955</a>
                <a className={styles.phone} href="tel:+996555188955">+996 555 188 955</a>
                <div className={styles.subTitle}>работаем с 10:00 до 00:00</div>
            </div>
            <div className={styles.right}>
                <a href="#">Отзывы</a>
                <a href="#">Доставка и оплата</a>
                {!isActive && <button className={styles.searchIcon} onClick={() => setIsActive(true)}>
                    <img src={searchIcon} alt='Поиск'/>
                </button> }
                {isActive && <form className={styles.form}>
                    <input autoFocus={true} tabIndex={0} onBlur={() => setIsActive(false)}
                           type="text" className={styles.input} placeholder='поиск...'/>
                </form>}
            </div>
        </div>
    );
};

export default Header;