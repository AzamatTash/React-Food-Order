import React from 'react';
import styles from './goodsCarousel.module.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slickStyle.css';
import Slider from 'react-slick';

import ProductCard from '../ProductCard';

type Product = {
    id?: string;
    title: string;
    image: string;
    weight: number;
    quantity?: number;
    price: number;
}

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
            "id": "set_1",
            "title": "Сет Шибуи",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/489.jpg",
            "weight": 800,
            "quantity": 24,
            "price": 1449
        },
        {
            "id": "set_2",
            "title": "Сет Ваташи",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/492.jpg",
            "weight": 800,
            "quantity": 34,
            "price": 1299
        },
        {
            "id": "set_3",
            "title": "Сет Широ",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/497.jpg",
            "weight": 800,
            "quantity": 24,
            "price": 999
        },
        {
            "id": "set_4",
            "title": "Сет Шитаги",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/498.jpg",
            "weight": 800,
            "quantity": 24,
            "price": 899
        },
        {
            "id": "set_5",
            "title": "Сет Футон",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/502.jpg",
            "weight": 950,
            "quantity": 32,
            "price": 1349
        },
        {
            "id": "set_6",
            "title": "Сет Доно",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/504.jpg",
            "weight": 550,
            "quantity": 20,
            "price": 1199
        },
        {
            "id": "set_7",
            "title": "Сет Тера",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/506.jpg",
            "weight": 1200,
            "quantity": 40,
            "price": 1799
        },
        {
            "id": "set_8",
            "title": "Сет Куро",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/507.jpg",
            "weight": 1000,
            "quantity": 32,
            "price": 1399
        },
        {
            "id": "set_9",
            "title": "Сет Гакко",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/508.jpg",
            "weight": 800,
            "quantity": 24,
            "price": 1099
        },
        {
            "id": "set_10",
            "title": "Сет Кетору",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/505.jpg",
            "weight": 1100,
            "quantity": 39,
            "price": 1299
        },
        {
            "id": "set_11",
            "title": "Сет Ашита",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/501.jpg",
            "weight": 800,
            "quantity": 24,
            "price": 1009
        },
        {
            "id": "set_12",
            "title": "Сет Атама",
            "image": "https://xn--4-ptbfxp.xn--p1ai/img/products/491.jpg",
            "weight": 1300,
            "quantity": 40,
            "price": 2009
        }
    ];

    return (
        <div className={styles.wrapper}>
            <Slider {...settings}>
                {
                    setsList.map((obj:Product) => (
                        <ProductCard key={obj.id} path={'sets'} {...obj}/>)
                    )
                }
            </Slider>
        </div>
    );
};

export default GoodsCarousel;