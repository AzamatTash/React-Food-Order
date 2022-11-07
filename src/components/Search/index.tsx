import React from 'react';
import styles from './serach.module.sass';
import searchIcon from '../../assets/img/search-icon.svg';

const Search = () => {
    return (
        <div>
            <form className={styles.form}>
                <input type="text" className={styles.input} placeholder='поиск...'/>
                <button className={styles.searchIcon} onClick={() => {}}>
                    <img src={searchIcon} alt='Поиск'/>
                </button>
            </form>
        </div>
    );
};

export default Search;