import React from 'react';
import ProductCard from '../../components/ProductCard';
import styles from './productPage.module.sass';
import backIcon from '../../assets/img/back-icon.svg';
import GoodsCarousel from '../../components/GoodsCarousel';
import philadelphiaRolls from '../../assets/img/philadelphia-rolls.png';
import banzaiRolls from '../../assets/img/banzai-rolls.png';
import arigatoRolls from '../../assets/img/arigato-rolls.png';

const Product = () => {
    const rollsList = [
        {
            image: philadelphiaRolls,
            title: 'Филадельфия',
            price: 140
        },
        {
            image: banzaiRolls,
            title: 'Банзай',
            price: 170
        },
        {
            image: arigatoRolls,
            title: 'Аригато',
            price: 180
        },
        {
            image: philadelphiaRolls,
            title: 'Филадельфия',
            price: 140
        },
        {
            image: banzaiRolls,
            title: 'Банзай',
            price: 170
        },
        {
            image: arigatoRolls,
            title: 'Аригато',
            price: 180
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.btn}>
                <div><img src={backIcon} alt='Назад'/></div>
                <div className={styles.text}>Назад</div>
            </div>
            <ProductCard/>
            <div className={styles.recommendation}>
                <div className={styles.title}>Рекомендуем к этому товару</div>
                <GoodsCarousel isProductPage={true}>
                    {rollsList}
                </GoodsCarousel>
            </div>
        </div>
    );
};

export default Product;