import React from 'react';
import styles from './productCard.module.sass'
import upCountIcon from '../../assets/img/up-count.svg';

const ProductCard = (props:any) => {
    return (
        <div className={styles.card}>
            <img src={props.image} className={props.isProductPage ? styles.img : styles.imgInitial}
                 alt='imgSet'/>
            <div>
                <h1 className={styles.title}>{props.title}</h1>
                <div className={styles.footer}>
                    {props.isProductPage ? '' :
                        <h3 className={styles.subTitle}>{props.weight} грамм  {props.quantity}
                            {props.quantity && ' кусочков'}</h3>}
                    <div className={styles.footerElem}>
                        <div className={styles.price}>{props.price} Руб</div>
                        {props.isProductPage ? <img className={styles.btnIcon} src={upCountIcon} alt='Добавить'/> :
                            <button className={styles.btn}>Хочу!</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;