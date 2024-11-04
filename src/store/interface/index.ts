import {Action, Thunk} from "easy-peasy";
import { Item } from "../../types/item";
import { Order } from "../../types/order";


export interface IOrder {
	items: Item[];
	totalPrice: number;
	addItem: Action<this, Item>;
	removeItem: Action<this, Item>;
	updateItem: Action<this, Item>;
	clearOrder: Action<this>;
	saveOrder: Thunk<this, Order>;
}

export type StoreModel = IOrder
