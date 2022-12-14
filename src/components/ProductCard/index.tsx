import React from 'react';
import styles from './productCard.module.sass';
import {Link} from 'react-router-dom';

import upCountIcon from '../../assets/img/up-count.svg';

type PropsTypes = {
    path?: string;
    id?: string;
    image: string;
    title: string;
    weight: number;
    quantity?: number;
    price: number;
    isProductPage?: boolean;
    className?: string
};

const ProductCard = ({path, id, image, title, weight, quantity,price, isProductPage}:PropsTypes) => {
    return (
        <div className={styles.card}>
            <img src={image} className={isProductPage ? styles.img : styles.imgInitial}
                 alt='imgSet'/>
            <div>
                <Link to={`/products/${path}/${id}`}>
                    <div className={styles.title}>{title}</div>
                </Link>
                <div className={styles.footer}>
                    {isProductPage ? '' :
                        <h3 className={styles.subTitle}>{weight} грамм  {quantity}
                            {quantity && ' кусочков'}</h3>}
                    <div className={styles.footerElem}>
                        <div className={styles.price}>{price} Руб</div>
                        {isProductPage ? <img className={styles.btnIcon} src={upCountIcon} alt='Добавить'/> :
                            <Link to={`/products/${path}/${id}`}>
                                <button className={styles.btn}>Хочу!</button>
                            </Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;