import './styles.scss';
import {Product} from "../../types/product.ts";
import React from "react";

interface MenuItemProps {
	product: Product
	onClickButton: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ product, onClickButton }) => {
	return (
		<button
			className='menu-item-container'
			onClick={onClickButton}
		>
			<header className='item-header'>
				<h3 className='item-header-title'>{product.name}</h3>
				<span className='item-header-price'>{`R$: ${product.price.toFixed(2)}`}</span>
			</header>
			<div className='item-divider'></div>
			<p className='item-description'>
				{product.description}
			</p>
		</button>
	)
}