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

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [isActive, setIsActive] = React.useState<number>(0);
    const currenSort = sortList[isActive];

    return (
        <div className={isOpen ? styles.sortOpen : styles.sortDefault}
             tabIndex={0} onBlur={(() => setIsOpen(false))} onClick={() => setIsOpen(!isOpen)}>
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