import React from 'react';
import styles from './ordering.module.sass';
import * as Yup from 'yup';
import {Field, Form, Formik, FormikProps} from 'formik';
import upCount from '../../assets/img/up-count.svg';
import downCount from '../../assets/img/down-count.svg';

interface FormValues {
    phone: string;
    name: string;
    checked: boolean;
    change?: string;
    comments?: string;
    street: string;
    house: string;
    entrance?: string;
    floor?: string;
    apartment?: string;
    email?: string;
}

const Ordering = () => {
    const [count, setCount] = React.useState<number>(1);
    const [payActive, setPayActive] = React.useState<number>(0);
    const [deliveryActive, setDeliveryActive] = React.useState<number>(1);
    const [deliveryTime, setDeliveryTime] = React.useState<number>(0);

    const payMethodList: string[] = ['Наличными', 'Картой'];
    // const payMethod = payMethodList[payActive];

    const deliveryList: string[] = ['Курьером', 'Самовывоз'];
    const deliveryMethod = deliveryList[deliveryActive];
    const deliveryMethodCurrent = deliveryMethod === deliveryList[1];

    const deliveryTimeList: string[] = ['На сейчас', 'На время'];
    // const deliveryTimeMethod = deliveryTimeList[deliveryTime];

    const initialValues:FormValues = {
        phone: '',
        name: '',
        checked: false,
        change: '',
        comments: '',
        street: '',
        house: '',
        entrance: '',
        floor: '',
        apartment: '',
        email: ''
    };

    const validationSchema = Yup.object({
        phone: Yup.string()
            .max(11, ' ')
            .min(11, ' ')
            .required(' '),
        name: Yup.string()
            .max(15, ' ')
            .required(' '),
        change: Yup.string()
            .required(' '),
        street: Yup.string()
            .required(' '),
        house: Yup.string()
            .required(' ')
    });

    const onSubmit = (values:FormValues) => {
        console.log(values);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Ваши данные</div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(props:FormikProps<FormValues>) => {
                    const { errors, values } = props;
                    return (
                        <Form className={styles.form}>
                            <div className={styles.column}>
                                <div className={styles.line}>
                                    <Field style={errors.phone && {border: '1px solid red'}} name='phone'
                                        className={styles.phone} placeholder='Телефон'/>
                                    <Field style={errors.name && {border: '1px solid red'}} name='name'
                                        className={styles.name} placeholder='Имя'/>
                                </div>
                                <div className={styles.line}>
                                    {payMethodList.map((item:string, index:number) => (
                                        <div key={index} className={payActive === index ? styles.active : styles.btn}
                                             onClick={() => setPayActive(index)}>{item}</div>
                                    ))}
                                </div>
                                <div className={styles.line}>
                                    <label>
                                        <Field type='checkbox' name='checked'/>
                                        Подготовить сдачу с
                                    </label>
                                    <Field disabled={!values.checked}
                                           style={values.checked && errors.change ? {border: '1px solid red'}:
                                               {border: 'none'}}
                                           value={!values.checked ? '' : values.change} name='change'
                                           className={styles.change} placeholder='Сумма'/>
                                </div>
                                <div className={styles.line}>
                                    <Field name='comments' className={styles.comments} placeholder='Комментарий'/>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.additional}>Палочки + соусник обычные</div>
                                    <div className={styles.group}>
                                        {count > 1 && <img className={styles.icon} src={downCount} alt='-'
                                                           onClick={() => setCount(count - 1)}/> }
                                        <div className={styles.count}>{count}</div>
                                        <img className={styles.icon} src={upCount} alt='+'
                                            onClick={() => setCount(count + 1)}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.column}>
                                <div className={styles.line}>
                                    {deliveryList.map((item:string, index:number) => (
                                        <div key={index} className={deliveryActive === index ? styles.active : styles.btn}
                                             onClick={() => setDeliveryActive(index)}>{item}</div>
                                    ))}
                                </div>
                                <div className={styles.line}>
                                    <Field style={errors.street && !deliveryMethodCurrent ?
                                        {border: '1px solid red'} : {border: 'none'}} name='street'
                                           className={styles.street} placeholder='Улица'
                                           disabled={deliveryMethod === deliveryList[1]}/>
                                    <Field style={errors.house && !deliveryMethodCurrent ?
                                        {border: '1px solid red'} : {border: 'none'}} name='house'
                                           className={styles.house} placeholder='Дом'
                                           disabled={deliveryMethod === deliveryList[1]}/>
                                </div>
                                <div className={styles.line}>
                                    <Field style={errors.apartment && {border: '1px solid red'}} name='apartment'
                                           className={styles.apartment} placeholder='Квартира'
                                           disabled={deliveryMethod === deliveryList[1]}/>
                                    <Field style={errors.entrance && {border: '1px solid red'}} name='entrance'
                                           className={styles.entrance} placeholder='Подъезд'
                                           disabled={deliveryMethod === deliveryList[1]}/>
                                    <Field style={errors.floor && {border: '1px solid red'}} name='floor'
                                           className={styles.floor} placeholder='Этаж'
                                           disabled={deliveryMethod === deliveryList[1]}/>
                                </div>
                                <div className={styles.line}>
                                    {deliveryTimeList.map((item:string, index:number) => (
                                        <div key={index} className={deliveryTime === index ? styles.active : styles.btn}
                                             onClick={() => setDeliveryTime(index)}>{item}</div>
                                    ))}
                                </div>
                                <div className={styles.line}>
                                    <Field name='email' className={styles.email} placeholder='Email (необязательно)'/>
                                </div>
                            </div>
                            <button className={styles.button}>Оформить заказ</button>
                        </Form>
                    )
                }}
            </Formik>
            <div className={styles.subText}>Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие
                на обработку персональных данных в соответствии с <a href="#">Публичной оффертой</a></div>
        </div>
    );
};

export default Ordering;