import React from 'react';
import styles from './categorias.module.sass';
import {Link} from 'react-router-dom';

import categoriPizza from '../../assets/img/categori-pizza.jpg';
import categoriKornDog from '../../assets/img/categori-korndog.png';
import categoriSets from '../../assets/img/categori-sets.jpg';
import categoriWok from '../../assets/img/categori-wok.jpg';
import categoriSushi from '../../assets/img/categori-sushi.jpg';

const Categorias = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <Link to='/products/sets' className={styles.item}>
                    <img src={categoriSets} alt='sets'/>
                    <div className={styles.title}>Сеты</div>
                </Link>
                <div className={styles.item}>
                    <img src={categoriPizza} alt='pizza'/>
                    <div className={styles.title}>Пицца</div>
                    <div className={styles.placeholder}>скоро</div>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.row}>
                    <Link to='/products/sushi' className={styles.itemRow}>
                        <img src={categoriSushi} alt='Sushi'/>
                        <div className={styles.title}>Суши</div>
                    </Link>
                    <div className={styles.itemRow}>
                        <img src={categoriKornDog} alt='korn-dog'/>
                        <div className={styles.title}>Корн дог</div>
                        <div className={styles.placeholder}>скоро</div>
                    </div>
                </div>
                <Link to='/products/wok' className={styles.item}>
                    <img src={categoriWok} alt='wok'/>
                    <div className={styles.title}>WOK</div>
                </Link>
            </div>
        </div>
    );
};

export default Categorias;