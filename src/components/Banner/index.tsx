import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './banner.module.sass';
import Slider from 'react-slick';
import bannerImg from '../../assets/img/banner-img.jpg';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
    };

    return (
        <div className={styles.wrapper}>
            <Slider {...settings}>
                <img src={bannerImg} alt='banner'/>
                <img src={bannerImg} alt='banner'/>
            </Slider>
        </div>
    );
};

export default Banner;