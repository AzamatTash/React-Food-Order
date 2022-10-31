import React from 'react';
import styles from './sideBarMenu.module.sass';
import logoIcon from '../../assets/img/logo-icons.svg';
import pizzaIcon from '../../assets/img/pizza-icon.svg';
import setsIcon from '../../assets/img/sets-icon.svg';
import wokIcon from '../../assets/img/wok-icon.svg';
import rolsIcon from '../../assets/img/rols-icon.svg';
import sushiIcon from '../../assets/img/sushi-icon.svg';
import salatsIcon from '../../assets/img/salats-icon.svg';
import supsIcon from '../../assets/img/sups-icon.svg';
import kornsIcon from '../../assets/img/korns-icons.svg';
import {Link} from 'react-router-dom';
import {Props} from '../Header';

const SideBarMenu = ({isOpenMenu, setIsOpenMenu}:Props) => {
        return (
        <div className={isOpenMenu ? styles.active : styles.wrapper} onClick={() => setIsOpenMenu(false)}>
            <div className={styles.head}>
                <Link to='/'>
                    <img className={styles.logo} src={logoIcon} alt='Лого'/>
                </Link>
                <div className={styles.title}>romsem</div>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={pizzaIcon} alt="pizzaIcon"/>
                    <Link to='/products/pizzas' className={styles.itemTitle}>Пицца</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={setsIcon} alt="pizzaIcon"/>
                    <Link to='/products/sets' className={styles.itemTitle}>Сеты</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={wokIcon} alt="pizzaIcon"/>
                    <Link to='/products/wok' className={styles.itemTitle}>Wok</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={rolsIcon} alt="pizzaIcon"/>
                    <Link to='/products/rolls' className={styles.itemTitle}>Роллы</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={sushiIcon} alt="pizzaIcon"/>
                    <Link to='/products/sushi' className={styles.itemTitle}>Суши</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={salatsIcon} alt="pizzaIcon"/>
                    <Link to='/products/salads' className={styles.itemTitle}>Салаты</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={supsIcon} alt="pizzaIcon"/>
                    <Link to='/products/soups' className={styles.itemTitle}>Супы</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={kornsIcon} alt="pizzaIcon"/>
                    <Link to='/products/corn_dogs' className={styles.itemTitle}>Корн-доги</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBarMenu;