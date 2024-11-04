import {action, thunk} from 'easy-peasy';
import {IOrder} from "../interface";
import axios from "axios";
import {Item} from "../../types/item.ts";

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
	saveItem: thunk(async (actions, payload: Item): Promise<void> => {
		try {
			const data: Item = await axios.post<Item>('/test', payload).then();
			actions.addItem(data);
		}
		catch {
			console.log("test")
		}
	}),
	removeItem: action((state, payload) => {
		state.items = state.items.filter((item) => item.id !== payload.id);
		state.totalPrice = state.items.reduce((prev, current) => prev + current.product.price * current.quantity, 0)
	}),
	removeAllItem: action((state) => {
		state.items = [];
		state.totalPrice = state.items.reduce((prev, current) => prev + current.product.price * current.quantity, 0)
	})
};

export default order;