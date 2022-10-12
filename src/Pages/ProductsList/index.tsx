import React from 'react';
import styles from './productList.module.sass';
import setsIcon from '../../assets/img/sets-icon.svg';
import Sort from '../../components/Sort';

const ProductList = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.product}>
                    <img src={setsIcon} className={styles.img} alt='setsIcon'/>
                    <div className={styles.title}>Сеты</div>
                </div>
                <div className={styles.sort}>
                    <Sort/>
                </div>
            </div>
        </div>
    );
};

export default ProductList;