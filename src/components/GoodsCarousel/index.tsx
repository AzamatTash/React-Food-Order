import React from 'react';
import styles from './goodsCarousel.module.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slickStyle.css';
import Slider from 'react-slick';
import salomonSet from '../../assets/img/salomon-set.jpg'
import philadelphiaSet from '../../assets/img/Philadelphia-set.jpg'
import philadelphiaBigSet from '../../assets/img/big-Philadelphia-set.jpg'
import ProductCard from '../ProductCard';

interface Product {
    image: any;
    title: string;
    description: {
        weight: number;
        quantity: number;
    }
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 979,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 526,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const setsList = [
        {
            image: salomonSet,
            title: 'Саломон сет',
            description: {
                weight: 1050,
                quantity: 30,
            },
            price: 1500
        },
        {
            image: philadelphiaSet,
            title: 'Филадельфия о лосось сет',
            description: {
                weight: 1260,
                quantity: 36,
            },
            price: 1150
        },
        {
            image: philadelphiaBigSet,
            title: 'Самая большая Филадельфия',
            description: {
                weight: 2050,
                quantity: 45,
            },
            price: 2100
        },
        {
            image: salomonSet,
            title: 'Саломон сет',
            description: {
                weight: 1050,
                quantity: 30,
            },
            price: 1500
        },
        {
            image: philadelphiaSet,
            title: 'Филадельфия о лосось сет',
            description: {
                weight: 1260,
                quantity: 36,
            },
            price: 1150
        },
        {
            image: philadelphiaBigSet,
            title: 'Самая большая Филадельфия',
            description: {
                weight: 2050,
                quantity: 45,
            },
            price: 2100
        }
    ];

    return (
        <div className={styles.wrapper}>
            <Slider {...settings}>
                {(props.children || setsList).map((obj:Product, index:number) => (
                    <ProductCard key={index} image={obj.image} title={obj.title} weight={obj.description.weight}
                                 quantity={obj.description.quantity} price={obj.price}
                                 isProductPage={props.isProductPage}/>))
                }
            </Slider>
        </div>
    );
};

export default GoodsCarousel;