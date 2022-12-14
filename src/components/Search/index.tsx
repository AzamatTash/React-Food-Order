import React from 'react';
import styles from './serach.module.sass';
import {useDispatch} from 'react-redux';
import debounce from 'lodash.debounce';

import searchIcon from '../../assets/img/search-icon.svg';
import {SetSearchValue} from '../../redux/slices/sortSlice';
import {AppDispatch} from '../../redux/store';
import clearValue from '../../assets/img/clear-input.svg';

const Search = () => {
    const [value, setValue] = React.useState<string>('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const dispatch = useDispatch<AppDispatch>();

    const onClickClear = () => {
        setValue('');
        dispatch(SetSearchValue(''));
        inputRef.current?.focus();
    };

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(SetSearchValue(str))
        }, 400),
        []
    );

    const onChangeValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value;
        setValue(currentValue);
        updateSearchValue(currentValue);
    };

    return (
        <div>
            <form className={styles.form}>
                <input ref={inputRef} type='text' onChange={onChangeValue} value={value} className={styles.input} placeholder='поиск...'/>
                <img className={styles.searchIcon} src={searchIcon} alt='Поиск'/>
                {value !== '' && <button className={styles.clearIcon} onClick={onClickClear}>
                    <img src={clearValue} alt='очистить'/>
                </button> }
            </form>
        </div>
    );
};

export default Search;