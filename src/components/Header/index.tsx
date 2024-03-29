import React from 'react';
import styles from './header.module.sass';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import menuIcon from '../../assets/img/open-menu-icon.svg';
import cartIcon from '../../assets/img/cart-icon.svg';
import logoIcon from '../../assets/img/logo-icons.svg';
import iconWatch from '../../assets/img/icon-watch.svg';
import { CartItem, cartItems } from '../../redux/slices/cartSlice';

export type PropsTypes = {
	setIsOpenMenu?: any;
	isOpenMenu?: boolean;
	setIsOpenCart?: any;
	isOpenCart?: boolean;
};

const Header = ({ setIsOpenMenu, setIsOpenCart }: PropsTypes) => {
	const navigate: NavigateFunction = useNavigate();
	const items: CartItem[] = useSelector(cartItems);
	const isMounded: React.MutableRefObject<boolean> = React.useRef(false);

	React.useEffect(() => {
		if (isMounded.current) {
			localStorage.setItem('cart', JSON.stringify(items));
		}
		isMounded.current = true;
	}, [items]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<img
					className={styles.menuIcon}
					src={menuIcon}
					alt="меню"
					onClick={() => setIsOpenMenu(true)}
				/>
				<img
					className={styles.logoIcon}
					src={logoIcon}
					alt="лого"
					onClick={() => navigate('/')}
				/>
				<div className={styles.info}>
					<img
						className={styles.watchIcon}
						src={iconWatch}
						alt="time"
					/>
					<div className={styles.subTitle}>
						работаем с 10:00 до 00:00
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.links}>
					<Link to="/reviews">Отзывы</Link>
					<Link to="/ordering">Доставка и оплата</Link>
				</div>
				<img
					className={styles.cartIcon}
					src={cartIcon}
					alt="меню"
					onClick={() => setIsOpenCart(true)}
				/>
				<div className={styles.count}>{items.length}</div>
			</div>
		</div>
	);
};

export default Header;
