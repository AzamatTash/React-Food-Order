import React from 'react';
import styles from './productCard.module.sass';
import imageProduct from '../../assets/img/Philadelphia-set.jpg';
import upCountIcon from '../../assets/img/up-count.svg';
import downCountIcon from '../../assets/img/down-count.svg';

const ProductCard = () => {
    const [countProduct, setCountProduct] = React.useState<number>(0)

    return (
        <div className={styles.wrapper}>
            <img src={imageProduct} className={styles.img} alt='productImage'/>
            <div className={styles.info}>
                <h1 className={styles.title}>Филадельфия и лосось сет</h1>
                <div className={styles.weightInfo}>290 грамм</div>
                <div className={styles.orderInfo}>
                    <div className={styles.price}>1150 РУБ</div>
                    <div className={styles.count}>{countProduct}</div>
                    <img src={upCountIcon} className={styles.upCount}
                         onClick={() => setCountProduct(countProduct + 1)} alt='+'/>
                    {countProduct > 0 && <img src={downCountIcon} className={styles.upCount}
                                              onClick={() => setCountProduct(countProduct - 1)} alt='+'/>}
                </div>
                <div className={styles.text}>Состав:</div>
                <div className={styles.subText}>Лосось, сыр "Филадельфия", огурец, авокадо</div>
                <button className={styles.btn}>Хочу!</button>
            </div>
        </div>
    );
};

export default ProductCard;