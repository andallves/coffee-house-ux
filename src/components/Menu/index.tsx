import './styles.scss';
import {Product} from "../../types/product.ts";
import {MenuItem} from "../MenuItem";
import {useStoreActions, useStoreState} from "../../store/hooks";
import { useEffect } from 'react';
import { productsData } from '../../data/products.ts';
import { Item } from '../../types/item.ts';
import Swal from 'sweetalert2'


export const Menu = () => {
	const items: Item[] = useStoreState(state => state.items);
	const addItem = useStoreActions(action => action.addItem);
	const updateItem = useStoreActions(action => action.updateItem);
	const products: Product[] = productsData;

	useEffect(() => {
		
	})
	
	const handleClickAddItem = (product: Product): void => {
		const itemAdded = items.find(item => item.product.id === product.id);

		if (itemAdded) {
			itemAdded.addOneMoreItem();
			updateItem(itemAdded);
			return;
		}

		const newItem: Item = new Item(product);
		addItem(newItem);
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			}
		});
		Toast.fire({
			icon: "success",
			title: "O item foi adicionado ao pedido com sucesso."
		});
		return;
	}
	
	return (
		<div className='menu-container'>
			<h3 className='menu-title'>Cardápio</h3>
			
			<div className='menu-items'>
			{products.length > 0 && products.map((product) => (
				<MenuItem 
					key={product.id} 
					product={product} 
					onClickButton={() => handleClickAddItem(product)}></MenuItem>
			))}
			</div>
		</div>
	)
}