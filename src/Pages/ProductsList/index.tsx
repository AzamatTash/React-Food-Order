import React from 'react';
import styles from './productList.module.sass';
import setsIcon from '../../assets/img/sets-icon.svg';
import Sort from '../../components/Sort';
import ProductCard from '../../components/ProductCard';
// import {useParams} from "react-router-dom";

const ProductList = () => {
    const setsProductList = [
        {
            id: 'set_1',
            title: 'Сет Шибуи',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/489.jpg',
            weight: 800,
            quantity: 24,
            price: 1449,
        },
        {
            id: 'set_2',
            title: 'Сет Ваташи',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/492.jpg',
            weight: 800,
            quantity: 34,
            price: 1299,
        },
        {
            id: 'set_3',
            title: 'Сет Широ',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/497.jpg',
            weight: 800,
            quantity: 24,
            price: 999,
        },
        {
            id: 'set_4',
            title: 'Сет Шитаги',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/498.jpg',
            weight: 800,
            quantity: 24,
            price: 899,
        },
        {
            id: 'set_5',
            title: 'Сет Футон',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/502.jpg',
            weight: 950,
            quantity: 32,
            price: 1349,
        },
        {
            id: 'set_6',
            title: 'Сет Доно',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/504.jpg',
            weight: 550,
            quantity: 20,
            price: 1199,
        },
        {
            id: 'set_7',
            title: 'Сет Тера',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/506.jpg',
            weight: 1200,
            quantity: 40,
            price: 1799,
        },
        {
            id: 'set_8',
            title: 'Сет Куро',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/507.jpg',
            weight: 1000,
            quantity: 32,
            price: 1399,
        },
        {
            id: 'set_9',
            title: 'Сет Гакко',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/508.jpg',
            weight: 800,
            quantity: 24,
            price: 1099,
        },
        {
            id: 'set_10',
            title: 'Сет Кетору',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/505.jpg',
            weight: 1100,
            quantity: 39,
            price: 1299,
        },
        {
            id: 'set_11',
            title: 'Сет Ашита',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/501.jpg',
            weight: 800,
            quantity: 24,
            price: 1009,
        },
        {
            id: 'set_12',
            title: 'Сет Атама',
            image: 'https://xn--4-ptbfxp.xn--p1ai/img/products/491.jpg',
            weight: 1300,
            quantity: 40,
            price: 2009,
        },
    ]
    // const params = useParams();

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
                    <ProductCard key={obj.id} className={styles.item} id={obj.id} image={obj.image} title={obj.title}
                                 weight={obj.weight} quantity={obj.quantity} price={obj.price}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;