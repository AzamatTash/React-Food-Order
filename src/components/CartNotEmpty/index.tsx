import React from 'react';
import styles from './cartNotEmpty.module.sass';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch} from '../../redux/store';
import downCount from '../../assets/img/down-count.svg';
import upCount from '../../assets/img/up-count.svg';
import removeIcon from '../../assets/img/clear-input.svg';
import {
    cartItems,
    cartTotalPrice,
    clearCart,
    minusCartItem,
    removeCartItem,
    setCartItem
} from '../../redux/slices/cartSlice';
import {getShortStr} from '../../utils/getShortStr';

type CartProps = {
    isOrderingPage: boolean;
    setIsOpenCart?: any;
};

const CartNotEmpty = ({isOrderingPage, setIsOpenCart}:CartProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const items = useSelector(cartItems);
    const totalPrice = useSelector(cartTotalPrice);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>Корзина</div>
                <div className={styles.subTitle} onClick={() => dispatch(clearCart())}>Очистить корзину</div>
                {
                    items.map(item => (
                        <div className={styles.product}>
                            <img src={item.image} className={styles.img} alt="image"/>
                            <div className={styles.info}>
                                <div className={styles.productName}>{getShortStr(item.title)}</div>
                                <div className={styles.optionals}>
                                    {
                                        item.quantityValue !== 1 &&
                                        <img src={downCount} className={styles.bntCount}
                                             onClick={() => dispatch(minusCartItem(item.id))} alt='меньше'/>
                                    }
                                    <div className={styles.productCount}>{item.quantityValue}</div>
                                    <img src={upCount} className={styles.bntCount}
                                         onClick={() => dispatch(setCartItem(item))}
                                         alt='больше'/>
                                    <div className={styles.productPrice}>{item.price} Руб</div>
                                </div>
                            </div>
                            <img src={removeIcon} onClick={() => dispatch(removeCartItem(item.id)) } alt="remove"/>
                        </div>)
                    )
                }
            </div>
            <div className={styles.footer}>
                {
                    !isOrderingPage ?
                    <>
                        <div className={styles.productPriceTotal}>{totalPrice} Руб</div>
                        <Link to='/ordering' className={styles.btnSendOrder}
                              onClick={() => setIsOpenCart(false)}>Оформить заказ</Link>
                    </> :
                        <div className={styles.productPriceTotal}>{totalPrice} Руб</div>
                }
            </div>
        </div>
    );
};

export default CartNotEmpty;