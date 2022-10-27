import React from 'react';
import styles from './mobileMenu.module.sass';
import pizzaIcon from '../../assets/img/menu-pizza.jpg';
// import setsIcon from '../../assets/img/menu-sets.jpg';
import wokIcon from '../../assets/img/menu-wok.jpg';
// import rollsIcon from '../../assets/img/menu-rolls.jpg';
import sushiIcon from '../../assets/img/menu-sushi.jpg';
// import supsIcon from '../../assets/img/menu-sups.jpg';
import salatsIcon from '../../assets/img/menu-salats.jpg';
// import korndogsIcon from '../../assets/img/menu-korndogs.jpg';
import stoksIcon from '../../assets/img/cat-img-5.jpg';

const MobileMenu = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <div className={styles.item}>
                    <div className={styles.title}></div>
                    <img src={pizzaIcon} className={styles.image} alt='Пицца'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}></div>
                    <img src={wokIcon} className={styles.image} alt='WOK'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}></div>
                    <img src={sushiIcon} className={styles.image} alt='Суши'/>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}></div>
                    <img src={salatsIcon} className={styles.image} alt='Салаты'/>
                    <div className={styles.placeholder}>скоро</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}></div>
                    <img src={stoksIcon} className={styles.image} alt='Акции'/>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;