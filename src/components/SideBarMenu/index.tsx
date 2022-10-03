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
import beveragesIcon from '../../assets/img/beverages-icons.svg';
import StockIcon from '../../assets/img/stock-icons.svg';


const SideBarMenu = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <img className={styles.logo} src={logoIcon} alt='Лого'/>
                <div className={styles.title}>romsem</div>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={pizzaIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Пицца</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={setsIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Сеты</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={wokIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Wok</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={rolsIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Роллы</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={sushiIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Суши</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={salatsIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Салаты</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={supsIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Супы</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={kornsIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Корн-доги</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={beveragesIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Напитки</a>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={StockIcon} alt="pizzaIcon"/>
                    <a href='#' className={styles.itemTitle}>Акции</a>
                </li>
            </ul>
        </div>
    );
};

export default SideBarMenu;