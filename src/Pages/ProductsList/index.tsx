import React from 'react';
import styles from './productList.module.sass';
import setsIcon from '../../assets/img/sets-icon.svg';
import Sort from '../../components/Sort';
import ProductCard from '../../components/ProductCard';

const ProductList = () => {
    const setsProductList = [
        {
            title: 'Сет Шибуи',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/489.jpg',
            description: {
                weight: 800,
                quantity: 24,
            },
            price: 1449,
        },
        {
            title: 'Сет Ваташи',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/492.jpg',
            description: {
                weight: 800,
                quantity: 34,
            },
            price: 1299,
        },
        {
            title: 'Сет Широ',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/497.jpg',
            description: {
                weight: 800,
                quantity: 24,
            },
            price: 999,
        },
        {
            title: 'Сет Шитаги',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/498.jpg',
            description: {
                weight: 800,
                quantity: 24,
            },
            price: 899,
        },
        {
            title: 'Сет Футон',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/502.jpg',
            description: {
                weight: 950,
                quantity: 32,
            },
            price: 1349,
        },
        {
            title: 'Сет Доно',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/504.jpg',
            description: {
                weight: 550,
                quantity: 20,
            },
            price: 1199,
        },
        {
            title: 'Сет Тера',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/506.jpg',
            description: {
                weight: 1200,
                quantity: 40,
            },
            price: 1799,
        },
        {
            title: 'Сет Куро',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/507.jpg',
            description: {
                weight: 1000,
                quantity: 32,
            },
            price: 1399,
        },
        {
            title: 'Сет Гакко',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/508.jpg',
            description: {
                weight: 800,
                quantity: 24,
            },
            price: 1099,
        },
        {
            title: 'Сет Кетору',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/505.jpg',
            description: {
                weight: 1100,
                quantity: 39,
            },
            price: 1299,
        },
        {
            title: 'Сет Ашита',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/501.jpg',
            description: {
                weight: 800,
                quantity: 24,
            },
            price: 1009,
        },
        {
            title: 'Сет Атама',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/491.jpg',
            description: {
                weight: 1300,
                quantity: 40,
            },
            price: 2009,
        },
    ]

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
            <div className={styles.content}>
                {setsProductList.map(obj => (
                    <ProductCard className={styles.item} image={obj.image} title={obj.title}
                                 weight={obj.description.weight} quantity={obj.description.quantity} price={obj.price}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;