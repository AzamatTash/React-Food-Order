import React from 'react';
import Banner from '../../components/Banner';
import Categorias from '../../components/Categorias';
import GoodsCarousel from '../../components/GoodsCarousel';
import MobileMenu from '../../components/MobileMenu';


const Home = () => {
    return (
        <div>
            <MobileMenu/>
            <Banner/>
            <Categorias/>
            <GoodsCarousel/>
        </div>
    );
};

export default Home;