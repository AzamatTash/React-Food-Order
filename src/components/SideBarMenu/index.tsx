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
                    <div className={styles.itemTitle}>Пицца</div>
                    <div className={styles.placeholder}>скоро</div>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={setsIcon} alt="setsIcon"/>
                    <Link to='/products/sets' className={styles.itemTitle}>Сеты</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={wokIcon} alt="wokIcon"/>
                    <Link to='/products/wok' className={styles.itemTitle}>Wok</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={rolsIcon} alt="rollsIcon"/>
                    <div className={styles.itemTitle}>Роллы</div>
                    <div className={styles.placeholder}>скоро</div>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={sushiIcon} alt="sushiIcon"/>
                    <Link to='/products/sushi' className={styles.itemTitle}>Суши</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={salatsIcon} alt="salatsIcon"/>
                    <div className={styles.itemTitle}>Салаты</div>
                    <div className={styles.placeholder}>скоро</div>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={supsIcon} alt="supsIcon"/>
                    <Link to='/products/sups' className={styles.itemTitle}>Супы</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.itemIcon} src={kornsIcon} alt="korndogIcon"/>
                    <div className={styles.itemTitle}>Корн-доги</div>
                    <div className={styles.placeholder}>скоро</div>
                </li>
            </ul>
        </div>
    );
};

export default SideBarMenu;