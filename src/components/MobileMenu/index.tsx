import React from 'react';
import styles from './mobileMenu.module.sass';
import pizzaIcon from '../../assets/img/menu-pizza.jpg';
import setsIcon from '../../assets/img/menu-sets.jpg';
import wokIcon from '../../assets/img/menu-wok.jpg';
import rollsIcon from '../../assets/img/menu-rols.jpg';
import sushiIcon from '../../assets/img/menu-sushi.jpg';
import supsIcon from '../../assets/img/menu-sups.jpg';
import salatsIcon from '../../assets/img/menu-salats.jpg';
import korndogsIcon from '../../assets/img/menu-korndogs.jpg';

const MobileMenu = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <div className={styles.item}>
                    <div className={styles.title}>Пицца</div>
                    <img src={pizzaIcon} className={styles.image} alt='Пицца'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>WOK</div>
                    <img src={wokIcon} className={styles.image} alt='WOK'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Суши</div>
                    <img src={sushiIcon} className={styles.image} alt='Суши'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Салаты</div>
                    <img src={salatsIcon} className={styles.image} alt='Салаты'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.item}>
                    <div className={styles.title}>Сеты</div>
                    <img src={setsIcon} className={styles.image} alt='Сеты'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Роллы</div>
                    <img src={rollsIcon} className={styles.image} alt='Роллы'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Супы</div>
                    <img src={supsIcon} className={styles.image} alt='Супы'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
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