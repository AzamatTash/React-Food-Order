import React from 'react';
import styles from './goodsCarousel.module.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slickStyle.css';
import Slider from 'react-slick';
import salomonSet from '../../assets/img/salomon-set.jpg'
import philadelphiaSet from '../../assets/img/Philadelphia-set.jpg'
import philadelphiaBigSet from '../../assets/img/big-Philadelphia-set.jpg'

const GoodsCarousel = () => {
    const settings = {
        speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className={styles.wrapper}>
            <Slider {...settings}>
                <div className={styles.card}>
                    <img src={salomonSet} className={styles.img} alt='imgSet'/>
                    <h1 className={styles.title}>Саломон сет</h1>
                    <h3 className={styles.subTitle}>1050 грамм, 30 кусочков</h3>
                    <div className={styles.footer}>
                        <div className={styles.price}>1500 Руб</div>
                        <button className={styles.btn}>Хочу!</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={philadelphiaSet} className={styles.img} alt='imgSet'/>
                    <h1 className={styles.title}>Филадельфия о лосось сет</h1>
                    <h3 className={styles.subTitle}>1260 грамм, 36 кусочков</h3>
                    <div className={styles.footer}>
                        <div className={styles.price}>1150 Руб</div>
                        <button className={styles.btn}>Хочу!</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={philadelphiaBigSet} className={styles.img} alt='imgSet'/>
                    <h1 className={styles.title}>Самая большая Филадельфия</h1>
                    <h3 className={styles.subTitle}>2050 грамм, 45 кусочков</h3>
                    <div className={styles.footer}>
                        <div className={styles.price}>2100 Руб</div>
                        <button className={styles.btn}>Хочу!</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={salomonSet} className={styles.img} alt='imgSet'/>
                    <h1 className={styles.title}>Саломон сет</h1>
                    <h3 className={styles.subTitle}>1050 грамм, 30 кусочков</h3>
                    <div className={styles.footer}>
                        <div className={styles.price}>1500 Руб</div>
                        <button className={styles.btn}>Хочу!</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={philadelphiaSet} className={styles.img} alt='imgSet'/>
                    <h1 className={styles.title}>Филадельфия о лосось сет</h1>
                    <h3 className={styles.subTitle}>1260 грамм, 36 кусочков</h3>
                    <div className={styles.footer}>
                        <div className={styles.price}>1150 Руб</div>
                        <button className={styles.btn}>Хочу!</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={philadelphiaBigSet} className={styles.img} alt='imgSet'/>
                    <h1 className={styles.title}>Самая большая Филадельфия</h1>
                    <h3 className={styles.subTitle}>2050 грамм, 45 кусочков</h3>
                    <div className={styles.footer}>
                        <div className={styles.price}>2100 Руб</div>
                        <button className={styles.btn}>Хочу!</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default GoodsCarousel;