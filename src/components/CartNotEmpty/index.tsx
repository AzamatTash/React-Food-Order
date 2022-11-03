import React from 'react';
import styles from './cartNotEmpty.module.sass';
import productImg from '../../assets/img/Philadelphia-set.jpg'
import downCount from '../../assets/img/down-count.svg'
import upCount from '../../assets/img/up-count.svg'
import {Link} from 'react-router-dom';

type cartProps = {
    isOrderingPage: boolean
}

const Cart = ({isOrderingPage}:cartProps) => {
    const [countProduct, setCountProduct] = React.useState<number>(1);

    const getShortStr = (str:string) => {
        if (str.length > 20) {
            return str.slice(0, 18) + '...';
        }
        return str;
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>Корзина</div>
                <div className={styles.product}>
                    <img src={productImg} className={styles.img} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.productName}>{getShortStr('Сет Большая Филадельфия')}</div>
                        <div className={styles.optionals}>
                            {countProduct !== 1 && <img src={downCount}
                                                        className={styles.bntCount}
                                                        onClick={() => setCountProduct(countProduct - 1)}
                                                        alt='меньше'/>
                            }
                            <div className={styles.productCount}>{countProduct}</div>
                            <img src={upCount} className={styles.bntCount} onClick={() => setCountProduct(countProduct + 1)}
                                 alt='больше'/>
                            <div className={styles.productPrice}>170 Руб</div>
                        </div>
                    </div>
                </div>
                <div className={styles.product}>
                    <img src={productImg} className={styles.img} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.productName}>{getShortStr('Сет Большая Филадельфия')}</div>
                        <div className={styles.optionals}>
                            {countProduct !== 1 && <img src={downCount}
                                                        className={styles.bntCount}
                                                        onClick={() => setCountProduct(countProduct - 1)}
                                                        alt='меньше'/>
                            }
                            <div className={styles.productCount}>{countProduct}</div>
                            <img src={upCount} className={styles.bntCount} onClick={() => setCountProduct(countProduct + 1)}
                                 alt='больше'/>
                            <div className={styles.productPrice}>170 Руб</div>
                        </div>
                    </div>
                </div>
                <div className={styles.product}>
                    <img src={productImg} className={styles.img} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.productName}>{getShortStr('Сет Большая Филадельфия')}</div>
                        <div className={styles.optionals}>
                            {countProduct !== 1 && <img src={downCount}
                                                        className={styles.bntCount}
                                                        onClick={() => setCountProduct(countProduct - 1)}
                                                        alt='меньше'/>
                            }
                            <div className={styles.productCount}>{countProduct}</div>
                            <img src={upCount} className={styles.bntCount} onClick={() => setCountProduct(countProduct + 1)}
                                 alt='больше'/>
                            <div className={styles.productPrice}>170 Руб</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                {
                    !isOrderingPage ?
                    <>
                        <div className={styles.productPriceTotal}>1700 Руб</div>
                        <Link to='/ordering'>
                            <button className={styles.btnSendOrder}>Оформить заказ</button>
                        </Link>
                    </> : ''
                }
            </div>
        </div>
    );
};

export default Cart;