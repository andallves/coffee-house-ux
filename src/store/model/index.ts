import {action, thunk} from 'easy-peasy';
import {IOrder} from "../interface";
import axios from "axios";
import { Order } from '../../types/order.ts';

const order: IOrder = {
	items: [],
	totalPrice: 0,
	addItem: action((state, payload) => {
		state.items = [...state.items, payload];
		state.totalPrice = state.items.reduce((prev, current) => prev + current.product.price * current.quantity, 0)
	}),
	updateItem: action((state, payload) => {
		state.items = state.items.map((item) => {
			state.totalPrice = state.items.reduce((prev, current) => prev + current.product.price * current.quantity, 0)
			if(item.id === payload.id) return payload;
			return item;
		});
	}),
	removeItem: action((state, payload) => {
		state.items = state.items.filter((item) => item.id !== payload.id);
		state.totalPrice = state.items.reduce((prev, current) => prev + current.product.price * current.quantity, 0)
	}),
	clearOrder: action((state) => {
		state.items = [];
		state.totalPrice = state.items.reduce((prev, current) => prev + current.product.price * current.quantity, 0)
	}),
	saveOrder: thunk(async (_actions, payload: Order): Promise<void> => {
		try {
			await axios.post<Order>('/test', payload).then();
		}
		catch {
			console.log("test")
		}
	}),
};

export default order;