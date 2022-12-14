import React from 'react';
import styles from './footer.module.sass';

import telegramIcon from '../../assets/img/telegram-icon.svg';
import whatsappIcon from '../../assets/img/whatsapp-icon.svg';
import instagramIcon from '../../assets/img/instagram-icon.svg';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <a href='#' className={styles.infoLink}>О компании</a>
                <a href='#' className={styles.infoLink}>Доставка и оплата</a>
                <a href='#' className={styles.infoLink}>Лента материалов</a>
                <a href='#' className={styles.infoLink}>Политика возврата</a>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>Выберите удобный мессенджер для общения</div>
                <div className={styles.wrapperIcon}>
                    <img src={telegramIcon} className={styles.socialIcon} alt='whatsapp'/>
                    <img src={whatsappIcon} className={styles.socialIcon} alt='telegram'/>
                    <img src={instagramIcon} className={styles.socialIcon} alt='instagram'/>
                </div>
            </div>
            <div className={styles.item}>
                <a className={styles.phone} href='tel:+996705188955'>+996 705 188 955</a>
                <a className={styles.phone} href='tel:+996555188955'>+996 555 188 955</a>
                <div className={styles.address}>Адрес: Новая 2</div>
            </div>
        </div>
    );
};

export default Footer;