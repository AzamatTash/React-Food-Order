import React from 'react';
import styles from './categorias.module.sass';
import catImgChicken from '../../assets/img/cat-img-1.jpg';
import catImgPizza from '../../assets/img/cat-img-2.jpg';
import catImgWithUgr from '../../assets/img/cat-img-3.jpg';
import catImgKornDog from '../../assets/img/cat-img-4.jpg';
import catImgStoke from '../../assets/img/cat-img-5.jpg';

const Categorias = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <div className={styles.item}>
                    <img src={catImgChicken} alt='chicken'/>
                    <div className={styles.title}>Чикен</div>
                </div>
                <div className={styles.item}>
                    <img src={catImgPizza} alt='pizza'/>
                    <div className={styles.title}>Пицца</div>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.row}>
                    <div className={styles.itemRow}>
                        <img src={catImgWithUgr} alt='With ugr'/>
                        <div className={styles.title}>С угрем</div>
                    </div>
                    <div className={styles.itemRow}>
                        <img src={catImgKornDog} alt='korn-dog'/>
                        <div className={styles.title}>Корн дог</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={catImgStoke} alt='stoke'/>
                    <div className={styles.title}>Акции</div>
                </div>
            </div>
        </div>
    );
};

export default Categorias;