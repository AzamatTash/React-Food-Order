import React from 'react';
import styles from './goodsCarousel.module.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slickStyle.css';
import Slider from 'react-slick';

import ProductCard from '../ProductCard';

type Product = {
	id?: string;
	title: string;
	image: string;
	weight: number;
	quantity?: number;
	price: number;
};

const GoodsCarousel = () => {
	const settings = {
		speed: 500,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 979,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 526,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const setsList = [
		{
			id: 'set_1',
			title: 'Сет Шибуи',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/tempurnyinabor11678843220.jpg?w=600&h=450',
			composition:
				'Филадельфия ролл классический 2 шт, Филадельфия люкс ролл',
			weight: 800,
			quantity: 24,
			price: 1449,
		},
		{
			id: 'set_2',
			title: 'Сет Ваташи',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/filadelfiyaset1677569240.jpg?w=600&h=450',
			composition:
				'Маки тофу, маки угорь, маки темпурная креветка, маки масаго, маки краб снежный, гункан копченый лосось, гункан угорь, гункан лосось, гункан краб снежный',
			weight: 800,
			quantity: 34,
			price: 1299,
		},
		{
			id: 'set_3',
			title: 'Сет Широ',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/setmoreisusha1677570180.jpg?w=600&h=450',
			composition:
				'Филадельфия ролл классический, Цезарь запеченный ролл, Америка легкий ролл',
			weight: 800,
			quantity: 24,
			price: 999,
		},
		{
			id: 'set_4',
			title: 'Сет Шитаги',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/setdruzhba1677570501.jpg?w=600&h=450',
			composition:
				'Канада ролл, запеченный Филадельфия ролл легкий, ролл темпурный с курицей гриль',
			weight: 800,
			quantity: 24,
			price: 899,
		},
		{
			id: 'set_5',
			title: 'Сет Футон',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/setpara1677570016.jpg?w=600&h=450',
			composition:
				'Мидии гриль с икорным соусом, ролл запеченный Вулкан, Филадельфия ролл классический, ролл №3 (тигровая криветка) (16 шт)',
			weight: 950,
			quantity: 32,
			price: 1349,
		},
		{
			id: 'set_6',
			title: 'Сет Доно',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/dsc669700308kopiya1676632361.jpg?w=600&h=450',
			composition:
				'Запеченная Калифорния ролл с лосось-соусом, ролл запеченный Вулкан, запеченный с креветкой и лосось-соусом ролл',
			weight: 550,
			quantity: 20,
			price: 1199,
		},
		{
			id: 'set_7',
			title: 'Сет Тера',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/setlegkii1677570218.jpg?w=600&h=450',
			composition:
				'Маки тофу, маки угорь, маки темпурная креветка, маки масаго, маки краб снежный, гункан копченый лосось, гункан угорь, гункан лосось, гункан краб снежный',
			weight: 1200,
			quantity: 40,
			price: 1799,
		},
		{
			id: 'set_8',
			title: 'Сет Куро',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/setsytnyi1677569950.jpg?w=600&h=450',
			composition:
				'Маки тофу, маки угорь, маки темпурная креветка, маки масаго, маки краб снежный, гункан копченый лосось, гункан угорь, гункан лосось, гункан краб снежный',
			weight: 1000,
			quantity: 32,
			price: 1399,
		},
		{
			id: 'set_9',
			title: 'Сет Гакко',
			image: 'https://vsem-edu-oblako.ru/upload/store/merchant3737/small/setvysshii1677570628.jpg?w=600&h=450',
			composition:
				'Филадельфия ролл классический, Цезарь запеченный ролл, Америка легкий ролл',
			weight: 800,
			quantity: 24,
			price: 1099,
		},
	];

	return (
		<div className={styles.wrapper}>
			<Slider {...settings}>
				{setsList.map((obj: Product) => (
					<ProductCard key={obj.id} path={'sets'} {...obj} />
				))}
			</Slider>
		</div>
	);
};

export default GoodsCarousel;
