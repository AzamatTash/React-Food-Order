import React from 'react';
import styles from './productList.module.sass';
import setsIcon from '../../assets/img/sets-icon.svg';
import Sort from '../../components/Sort';
import ProductCard from '../../components/ProductCard';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts, productsList} from '../../redux/slices/productsSlice';
import {AppDispatch} from '../../redux/store';
import {currentSearchValue, currentSort} from '../../redux/slices/sortSlice';
import Search from '../../components/Search';
import loadingIcon from '../../assets/img/loading.gif';

export type ParamsType = {
    path: string;
    sortType: string;
    orderType: string;
    searchValue: string;
};

const ProductList = () => {
    const title = {
        pizza: 'Пицца',
        sets: 'Сеты',
        wok: 'WOK',
        rolls: 'Роллы',
        sups: 'Супы',
        sushi: 'Суши'
    };

    const paramsUrl = useParams();
    const path = paramsUrl.id;
    const currentTitle = title[path as keyof typeof title];

    const dispatch = useDispatch<AppDispatch>();
    const {items, status} = useSelector(productsList);
    const {sortType, orderType} = useSelector(currentSort)
    const searchValue = useSelector(currentSearchValue)

    React.useEffect(() => {
        if (path != null) {
            const params:ParamsType = {path, sortType, orderType, searchValue};
            dispatch(fetchProducts(params))
        }
    },[currentTitle, sortType, orderType, searchValue]);

    return (
        <div>
            <Search/>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.product}>
                        <img src={setsIcon} className={styles.img} alt='icon'/>
                        <div className={styles.title}>{currentTitle}</div>
                    </div>
                    <div className={styles.sort}>
                        <Sort/>
                    </div>
                </div>
                <div className={styles.content}>
                    {status=== 'loading' ? <img src={loadingIcon} alt="Загрузка..."/> :
                        items.map(item => (
                        <ProductCard key={item.id} className={styles.item} path={path}
                                     isProductPage={false} {...item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;