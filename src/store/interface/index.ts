import {Action, Thunk} from "easy-peasy";
import { Item } from "../../types/item";


export interface IOrder {
	items: Item[];
	totalPrice: number;
	addItem: Action<this, Item>;
	removeItem: Action<this, Item>;
	removeAllItem: Action<this>;
	updateItem: Action<this, Item>;
	saveItem: Thunk<this, Item>;
}

export type StoreModel = IOrder
