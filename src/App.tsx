import React from 'react';
import styles from './app.module.sass';
import SideBarMenu from './components/SideBarMenu';
import SideBarCart from './components/SideBarCart';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
// import ProductPage from './Pages/Product';
import ProductList from './Pages/ProductsList';
import Reviews from './Pages/Reviews';
import {Route, Routes} from 'react-router-dom';
import Ordering from './Pages/Ordering';

function App() {
    return (
        <>
            <SideBarMenu/>
            <Header/>
            <SideBarCart/>
            <div className={styles.container}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/products/:id' element={<ProductList/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
                    <Route path='/ordering' element={<Ordering/>}/>
                    {/*<ProductPage/>*/}
                </Routes>
                <Footer/>
            </div>
        </>
    );
}

export default App;
