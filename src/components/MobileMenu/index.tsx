import React from 'react';
import styles from './mobileMenu.module.sass';
import pizzaIcon from '../../assets/img/menu-pizza.png';
import setsIcon from '../../assets/img/menu-sets.png';
import wokIcon from '../../assets/img/menu-wok.png';
import rollsIcon from '../../assets/img/menu-rolls.png';
import sushiIcon from '../../assets/img/menu-sushi.png';
import supsIcon from '../../assets/img/menu-sups.png';
import salatsIcon from '../../assets/img/menu-salats.png';
import korndogsIcon from '../../assets/img/menu-korndog.png';
import {Link} from "react-router-dom";

const MobileMenu = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <div className={styles.item}>
                    <div className={styles.title}>Пицца</div>
                    <img src={pizzaIcon} className={styles.image} alt='Пицца'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
                <Link to='/products/wok' className={styles.item}>
                    <div className={styles.title}>WOK</div>
                    <img src={wokIcon} className={styles.image} alt='WOK'/>
                </Link>
                <Link to='/products/sushi' className={styles.item}>
                    <div className={styles.title}>Суши</div>
                    <img src={sushiIcon} className={styles.image} alt='Суши'/>
                </Link>
                <div className={styles.item}>
                    <div className={styles.title}>Салаты</div>
                    <img src={salatsIcon} className={styles.image} alt='Салаты'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
            </div>
            <div className={styles.column}>
                <Link to='/products/sets' className={styles.item}>
                    <div className={styles.title}>Сеты</div>
                    <img src={setsIcon} className={styles.image} alt='Сеты'/>
                </Link>
                <div className={styles.item}>
                    <div className={styles.title}>Роллы</div>
                    <img src={rollsIcon} className={styles.image} alt='Роллы'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
                <Link to='/products/sups' className={styles.item}>
                    <div className={styles.title}>Супы</div>
                    <img src={supsIcon} className={styles.image} alt='Супы'/>
                </Link>
                <div className={styles.item}>
                    <div className={styles.title}>Корн-дог</div>
                    <img src={korndogsIcon} className={styles.image} alt='Корн-дог'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;