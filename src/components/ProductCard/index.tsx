import React from 'react';
import styles from './productCard.module.sass'
import upCountIcon from '../../assets/img/up-count.svg';
import {Link} from 'react-router-dom';
import {CartItem, setCartItem} from '../../redux/slices/cartSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';

type PropsType = {
    path?: string;
    id?: string;
    image: string;
    title: string;
    weight: number;
    quantity?: number;
    price: number;
    isProductPage: boolean;
    className?: string
}

const ProductCard = ({path, id, image, title, weight, quantity,price, isProductPage}:PropsType) => {
    const dispatch = useDispatch<AppDispatch>();

    const onClickAddProduct = () => {
        const item:CartItem = {
            id,
            image,
            title,
            price,
            quantityValue: 1
        };

        dispatch(setCartItem(item));
    };


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
                            <button className={styles.btn} onClick={onClickAddProduct}>Хочу!</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;