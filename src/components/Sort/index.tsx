import React from 'react';
import styles from './sort.module.sass';
import {currentSort, setSort, SortState} from '../../redux/slices/sortSlice';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {fetchProducts} from '../../redux/slices/productsSlice';
import {ParamsType} from '../../Pages/ProductsList';
import {useParams} from 'react-router-dom';

const Sort = () => {
    const sortList:SortState[] = [
        {
            sortType: '',
            orderType: 'asc',
            description: 'По умолчанию'
        },
        {
            sortType: 'title',
            orderType: 'asc',
            description: 'Название'
        },
        {
            sortType: 'price',
            orderType: 'asc',
            description: 'Сначало дешевле'
        },
        {
            sortType: 'price',
            orderType: 'desc',
            description: 'Сначало дороже'
        },
        {
            sortType: 'quantity',
            orderType: 'asc',
            description: 'Количество кусочков'
        },
        {
            sortType: 'weight',
            orderType: 'asc',
            description: 'Вес'
        },
    ];

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [isActive, setIsActive] = React.useState<number>(0);
    const activeSort = sortList[isActive];

    const dispatch = useDispatch<AppDispatch>();
    const {sortType, orderType, description} = useSelector(currentSort);

    const paramsUrl = useParams();
    const path = paramsUrl.id;

    React.useEffect(() => {
        dispatch(setSort(activeSort));
    },[isActive]);

    React.useEffect(() => {
        if (path != null) {
            const params:ParamsType = {path, sortType, orderType};
            dispatch(fetchProducts(params));
        }
    },[description]);

    return (
        <div className={isOpen ? styles.sortOpen : styles.sortDefault}
             tabIndex={0} onBlur={() => setIsOpen(false)} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.title}>Сортировка</div>
            <div className={styles.text}>{description}</div>
            <ul className={styles.list}>
                {sortList.map((obj, index:number) => (
                    <li key={index} className={isActive === index ? styles.activeItem : styles.item}
                    onClick={() => setIsActive(index)}>{obj.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sort;