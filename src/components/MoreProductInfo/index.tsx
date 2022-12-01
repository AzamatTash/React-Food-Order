import React from 'react';
import styles from './MoreProductInfo.module.sass';
import upCountIcon from '../../assets/img/up-count.svg';
import downCountIcon from '../../assets/img/down-count.svg';
import {ProductState} from '../../redux/slices/productsSlice';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {CartItem, setCartItem} from "../../redux/slices/cartSlice";

const MoreProductInfo = ({id, title, price, weight, image, composition}:ProductState) => {
    const [countProduct, setCountProduct] = React.useState<number>(1)

    const dispatch = useDispatch<AppDispatch>();

    const onClickAddProduct = () => {
        const item:CartItem = {
            id,
            image,
            title,
            price,
            quantityValue: countProduct
        };

        dispatch(setCartItem(item));
    };

    React.useEffect(() => window.scrollTo(0, 0),[]);

    return (
        <div className={styles.wrapper}>
            <img src={image} className={styles.img} alt='productImage'/>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.weightInfo}>{weight} грамм</div>
                <div className={styles.orderInfo}>
                    <div className={styles.price}>{price} Руб</div>
                    {countProduct > 1 && <img src={downCountIcon} className={styles.toggle}
                                              onClick={() => setCountProduct(countProduct - 1)} alt='+'/>}
                    <div className={styles.count}>{countProduct}</div>
                    <img src={upCountIcon} className={styles.toggle}
                         onClick={() => setCountProduct(countProduct + 1)} alt='+'/>
                </div>
                <div className={styles.text}>Состав:</div>
                <div className={styles.subText}>{composition}</div>
                <button className={styles.btn} onClick={onClickAddProduct}>В КОРЗИНУ</button>
            </div>
        </div>
    );
};

export default MoreProductInfo;