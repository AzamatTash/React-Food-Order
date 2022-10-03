import React from 'react';
import styles from './app.module.sass';
import SideBarMenu from './components/SideBarMenu';
import SideBarCart from './components/SideBarCart';
import Header from './components/Header';

function App() {
    return (
        <>
            <SideBarMenu/>
            <Header/>
            <SideBarCart/>
            <div className={styles.container}>
            </div>
        </>
    );
}

export default App;
