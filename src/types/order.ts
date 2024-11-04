import {Item} from "./item.ts";

export type Order = {
	id: string;
	items: Item[];
	totalPrice: number;
}