import React from 'react';
import styles from './app.module.sass';
import SideBarMenu from './components/SideBarMenu';
import SideBarCart from './components/SideBarCart';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Product from './Pages/Product';
import ProductList from './Pages/ProductsList';
import Reviews from './Pages/Reviews';
import {Route, Routes} from 'react-router-dom';
import Ordering from './Pages/Ordering';
import FooterBar from './components/FooterBar';
import Cart from './Pages/Cart';
import Search from "./components/Search";

function App() {
    const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);
    const [isOpenCart, setIsOpenCart] = React.useState<boolean>(false);

    const handleClick = () => {
        setIsOpenMenu(false);
        setIsOpenCart(false);
    };

    return (
        <>
            <SideBarMenu setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}/>
            <Header setIsOpenMenu={setIsOpenMenu} setIsOpenCart={setIsOpenCart}/>
            <SideBarCart isOpenCart={isOpenCart}/>
            <div className={styles.container} onClick={handleClick}>
                <Search/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/products/:id' element={<ProductList/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
                    <Route path='/ordering' element={<Ordering/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/products/:id/:id' element={<Product/>}/>
                </Routes>
                <Footer/>
                <FooterBar/>
            </div>
        </>
    );
}

export default App;
