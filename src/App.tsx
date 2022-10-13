import React from 'react';
import styles from './app.module.sass';
import SideBarMenu from './components/SideBarMenu';
import SideBarCart from './components/SideBarCart';
import Header from './components/Header';
// import Home from './Pages/Home';
import Footer from './components/Footer';
// import ProductPage from './Pages/Product';
// import ProductList from './Pages/ProductsList';
import Reviews from './Pages/Reviews';

function App() {
    return (
        <>
            <SideBarMenu/>
            <Header/>
            <SideBarCart/>
            <div className={styles.container}>
                {/*<Home/>*/}
                {/*<ProductPage/>*/}
                {/*<ProductList/>*/}
                <Reviews/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
