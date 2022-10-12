import React from 'react';
import styles from './goodsCarousel.module.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slickStyle.css';
import Slider from 'react-slick';
import salomonSet from '../../assets/img/salomon-set.jpg'
import philadelphiaSet from '../../assets/img/Philadelphia-set.jpg'
import philadelphiaBigSet from '../../assets/img/big-Philadelphia-set.jpg'
import upCountIcon from '../../assets/img/up-count.svg';

interface Product {
    image: any;
    title: string;
    description: string;
    price: number;
}

const GoodsCarousel = (props:any) => {
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
    const setsList = [
        {
            image: salomonSet,
            title: 'Саломон сет',
            description: '1050 грамм, 30 кусочков',
            price: 1500
        },
        {
            image: philadelphiaSet,
            title: 'Филадельфия о лосось сет',
            description: '1260 грамм, 36 кусочков',
            price: 1150
        },
        {
            image: philadelphiaBigSet,
            title: 'Самая большая Филадельфия',
            description: '2050 грамм, 45 кусочков',
            price: 2100
        },
        {
            image: salomonSet,
            title: 'Саломон сет',
            description: '1050 грамм, 30 кусочков',
            price: 1500
        },
        {
            image: philadelphiaSet,
            title: 'Филадельфия о лосось сет',
            description: '1260 грамм, 36 кусочков',
            price: 1150
        },
        {
            image: philadelphiaBigSet,
            title: 'Самая большая Филадельфия',
            description: '2050 грамм, 45 кусочков',
            price: 2100
        }
    ];

    return (
        <div className={styles.wrapper}>
            <Slider {...settings}>
                {(props.children || setsList).map((obj:Product) => (
                        <div className={styles.card}>
                            <img src={obj.image} className={props.isProductPage ? styles.img : styles.imgInitial}
                                 alt='imgSet'/>
                            <h1 className={styles.title}>{obj.title}</h1>
                            {props.isProductPage ? '' : <h3 className={styles.subTitle}>{obj.description}</h3>}
                            <div className={styles.footer}>
                                <div className={styles.price}>{obj.price} Руб</div>
                                {props.isProductPage ? <img className={styles.btnIcon} src={upCountIcon} alt='Добавить'/> :
                                    <button className={styles.btn}>Хочу!</button>}
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default GoodsCarousel;