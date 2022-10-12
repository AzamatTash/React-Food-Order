import React from 'react';
import styles from './sort.module.sass';

const Sort = () => {
    const sortList = [
        'По умолчанию',
        'Название',
        'Сначало дешевле',
        'Сначало дороже',
        'Количество кусочков',
        'Вес',
    ];

    const [open, setOpen] = React.useState<boolean>(false);
    const [isActive, setIsActive] = React.useState<number>(0);
    const currenSort = sortList[isActive];

    return (
        <div className={open ? styles.sortOpen : styles.sortDefault} onClick={() => setOpen(!open)}>
            <div className={styles.title}>Сортировка</div>
            <div className={styles.text}>{currenSort}</div>
            <ul className={styles.list}>
                {sortList.map((item, index) => (
                    <li key={index} className={isActive === index ? styles.activeItem : styles.item}
                    onClick={() => setIsActive(index)}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sort;