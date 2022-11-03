import React from 'react';
import styles from './productList.module.sass';
import setsIcon from '../../assets/img/sets-icon.svg';
import Sort from '../../components/Sort';
import ProductCard from '../../components/ProductCard';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts, productsList} from '../../redux/slices/productsSlice';
import {AppDispatch} from '../../redux/store';

const ProductList = () => {
    const title = {
        pizza: 'Пицца',
        sets: 'Сеты',
        wok: 'WOK',
        rolls: 'Роллы',
        sups: 'Супы',
        sushi: 'Суши'
    };

    const params = useParams();
    const path = params.id;
    const currentTitle = title[path as keyof typeof title];

    const dispatch = useDispatch<AppDispatch>();
    const {items} = useSelector(productsList);

    React.useEffect(() => {
        if (path != null) {
            dispatch(fetchProducts(path))
        }
    },[currentTitle]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.product}>
                    <img src={setsIcon} className={styles.img} alt='setsIcon'/>
                    <div className={styles.title}>{currentTitle}</div>
                </div>
                <div className={styles.sort}>
                    <Sort/>
                </div>
            </div>
            <div className={styles.content}>
                {items.map(item => (
                    <ProductCard key={item.id} className={styles.item} id={item.id} image={item.image} title={item.title}
                                 weight={item.weight} quantity={item.quantity} price={item.price}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;