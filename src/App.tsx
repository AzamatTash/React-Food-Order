import React from 'react';
import styles from './app.module.sass';
import SideBarMenu from './components/SideBarMenu';
import SideBarCart from './components/SideBarCart';
import Header from './components/Header';
// import Home from './Pages/Home';
import Footer from './components/Footer';
import ProductCard from "./components/ProductCard";

function App() {
    return (
        <>
            <SideBarMenu/>
            <Header/>
            <SideBarCart/>
            <div className={styles.container}>
                {/*<Home/>*/}
                <ProductCard/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
