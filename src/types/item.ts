import { Product } from "./product";
import { v4 as uuidv4 } from 'uuid'

export class Item {
	readonly id: string;
	product: Product;
	quantity: number = 1;

	constructor(product: Product) {
		this.id = uuidv4();
		this.product = product;
		this.quantity = 1;
	}

	public get totalPrice(): number {
		if (this.product.price) return 0;
		return this.product.price * this.quantity;
	}

	public addOneMoreItem(): void {
		this.quantity++;
	}
}