import React from 'react';
import styles from './reviews.module.sass';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {getConvertDate} from '../../utils/convertDate';

type Data = {
    name: string;
    review: string;
    date: string;
};

const Reviews = () => {
    const [reviewsList, setReviewsList] = React.useState([
        {
            name: 'Розалия',
            date: '1655240584567',
            review: 'Ваша доставка и ваши блюда лучшие в гораде!) всегда очень вкусно, вовремя, ' +
                'всегда вежливые курьеры и девушки на телефоне',
        },
        {
            name: 'Елена',
            date: '1660942984567',
            review: 'Ооочень вкусно!!!',
        },
        {
            name: 'Сергей Гарилюк',
            date: '1647810184567',
            review: 'Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. ' +
                'За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. ' +
                'Успехов Вам и приятных бонусов нам )',
        },
    ])
    const [openForm, setOpenForm] = React.useState<boolean>(false);

    React.useEffect(() => window.scroll(0,0), []);

    const initialValues:Data = {
        name: '',
        review: '',
        date: +new Date() + ''
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .max(15, 'Должно быть не более 15 символов.')
            .required('Введите имя'),
        review: Yup.string()
            .required('Введите отзыв'),
    });

    const onSubmit = (values:Data) => {
        setReviewsList([{
            name: values.name,
            review: values.review,
            date: values.date,
        }, ...reviewsList]);
        setOpenForm(false);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>Отзывы</div>
                {openForm ? '' : <button className={styles.btn} onClick={() => setOpenForm(true)}>
                                    + Добавить отзыв</button>}
            </div>
            <div className={styles.content}>
                {openForm &&
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form className={styles.form}>
                            <Field className={styles.fieldName} name='name' type='text' placeholder='Имя'/>
                            <ErrorMessage className={styles.error} name='name' component='div'/>

                            <Field className={styles.fieldText} name='review' type='text' component='textarea'
                                   placeholder='Напишите отзыв...'/>
                            <ErrorMessage className={styles.error} name='review' component='div'/>

                            <button className={styles.btn} type='submit'>Отправить</button>
                        </Form>
                    </Formik>
                }
                {reviewsList.map((obj:Data, index:number) => (
                    <div key={index} className={styles.review}>
                        <div className={styles.header}>
                            <div className={styles.name}>{obj.name}</div>
                            <div className={styles.date}>{getConvertDate(obj.date)}</div>
                        </div>
                        <p className={styles.text}>{obj.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;