import React from 'react';
import styles from './productPage.module.sass';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

import backIcon from '../../assets/img/back-icon.svg';
import MoreProductInfo from '../../components/MoreProductInfo';
import {api} from '../../axios';
import {ProductState} from '../../redux/slices/productsSlice';

const Product = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    const [data, setData] = React.useState<ProductState>({
        id:'',
        title: '',
        image: '',
        weight: 0,
        composition: '',
        price: 0
    });

    const location = useLocation();
    const path = location.pathname;

    React.useEffect(() => {
        const fetchProduct = async() => {
            const newPath = path.replace('/products/', '');
            const {data} = await api.getProduct(newPath);
            setData(data);
        };

        fetchProduct().catch(() => {
            alert('Продукт не найден, попробуйте позже!')
        })
    },[id]);

    const onClickBack = () => {
        if(id != null) navigate(`${path.replace(id, '')}`);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.btn} onClick={onClickBack}>
                <div>
                    <img src={backIcon} alt='Назад'/>
                </div>
                <div className={styles.text}>Назад</div>
            </div>
            <MoreProductInfo {...data}/>
        </div>
    );
};

export default Product;