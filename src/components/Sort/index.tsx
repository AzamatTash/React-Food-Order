import React from 'react';
import styles from './sort.module.sass';
import {currentSort, setDescription, setOrderType, setSort} from '../../redux/slices/sortSlice';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';

type SortListItem = {
    sortType: string;
    orderType: string;
    description: string;
};

const Sort = () => {
    const sortList:SortListItem[] = [
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
    const {description} = useSelector(currentSort);

    React.useEffect(() => {
        dispatch(setSort(activeSort.sortType));
        dispatch(setOrderType(activeSort.orderType));
        dispatch(setDescription(activeSort.description));
    },[isActive]);

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