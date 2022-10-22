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
    change: string;
    comments: string;
    street: string;
    house: string;
    entrance: string;
    floor: string;
    apartment: string;
    email: string;
}

const Ordering = () => {
    const [count, setCount] = React.useState<number>(1);
    const [active, setActive] = React.useState<number>(0);

    const payMethodList: string[] = ['Наличными', 'Картой'];
    // const payMethod = payMethodList[active];

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
            .max(11, 'Не корректный номер')
            .min(11, 'Не корректный номер')
            .required('Введите номер'),
        name: Yup.string()
            .max(15, 'Должно быть не более 15 символов.')
            .required('Введите имя'),
        change: Yup.string()
            .required(' '),
        street: Yup.string()
            .required('')
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
                                        <div key={index} className={active === index ? styles.active : styles.btn}
                                             onClick={() => setActive(index)}>{item}</div>
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
                            <div className={styles.column}></div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default Ordering;