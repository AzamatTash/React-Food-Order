import React from 'react';
import Banner from '../../components/Banner';
import Categorias from '../../components/Categorias';
import GoodsCarousel from '../../components/GoodsCarousel';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categorias/>
            <GoodsCarousel/>
        </div>
    );
};

export default Home;