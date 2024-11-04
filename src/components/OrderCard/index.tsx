import './styles.scss';
import {Item} from "../../types/item";
import {useStoreActions, useStoreState} from "../../store/hooks";
import { BsTrash3Fill } from "react-icons/bs";
import { Order } from '../../types/order';
import { v4 as uuidv4} from 'uuid';
import Swal from 'sweetalert2';

export const OrderCard = () => {
    const items: Item[] = useStoreState((state) => state.items);
    const totalPrice: number = useStoreState((state) => state.totalPrice);

    const removeItem = useStoreActions((actions) => actions.removeItem);
    const updateItem = useStoreActions((actions) => actions.updateItem);
    const clearOrder = useStoreActions((actions) => actions.clearOrder);
    const saveOrder = useStoreActions((actions) => actions.saveOrder)

    const handleQuantityChange = (item: Item, quantity: number) => {
        item.quantity = quantity;
        updateItem(item,);
    }

    const handleRemoveItemByOrder = async (item: Item) => {
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
            title: "O item foi removido do pedido com sucesso."
        });
        removeItem(item);
    }

    const handleCancelOrder = async () => {
        if (!items.length) {
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
                icon: "error",
                title: "Não há nenhum item no seu carrinho."
            });
            return;
        }
        const { value: accept } = await Swal.fire({
            title: 'Você tem certeza?',
            text: 'Você tem certeza que deseja remover todos os itens do carrinho?',
            icon: 'warning',
            confirmButtonColor: "#99582a",
            reverseButtons: true,
            showCancelButton: true,
            focusConfirm: true,

        });
        if (accept) {
            Swal.fire({
                text: "O carrinho foi esvaziado.",
                confirmButtonColor: "#99582a"
            })
            clearOrder();
        }
    }

    const handleSaveOrder = async (items: Item[]) => {
        const order: Order = {
            id: uuidv4(),
            items: items,
            totalPrice: totalPrice,
        }
        saveOrder(order);
        const { value: accept } = await Swal.fire({
            title: 'Confirmar pedido?',
            text: 'Você deseja confirmar o pedido?',
            icon: 'question',
            confirmButtonColor: "#99582a",
            reverseButtons: true,
            showCancelButton: true,
            focusConfirm: true,

        });
        if (accept) {
            Swal.fire({
                text: "O pedido foi realizado com sucesso.",
                confirmButtonColor: "#99582a"
            });
            clearOrder();
        }
    }

    return (
        <section className='order-container'>
            <article>
                <span className='order-title'>Pedido</span>
                
                <table className="table table-hover">
                    <thead>
                        <tr className='table-header-row'>
                            <th scope="col" className='table-header-title'>#</th>
                            <th scope="col" className='table-header-title'>Descrição</th>
                            <th scope="col" className='table-header-title'>Un.</th>
                            <th scope="col" className='table-header-title'>Valor Un.</th>
                            <th scope="col" className='table-header-title'>Valor total</th>
                            <th scope="col" className='table-header-title'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length <= 0 && (
                        <tr className='table-body-row table-body-empty'>
                            <span className='without-item'>Não há nenhum item na lista.</span>
                        </tr>
                        )}
                        {items.length > 0 && items.map((item, index) => (
                        <tr
                        className='table-body-row'
                        key={item.id}>
                            <th scope="row" className='table-body-item'>{index+1}</th>
                            <td className='table-body-item'>{item.product?.name}</td>
                            <td className='table-body-item'>
                                <input 
                                type="number" 
                                min="1"
                                max="10"
                                className="input-quantity" value={item.quantity}
                                onChange={(event) => handleQuantityChange(item, Number(event.target.value))}
                                />
                            </td>
                            <td className='table-body-item'>RS: {item.product.price.toFixed(2)}</td>
                            <td className='table-body-item'>RS: {(item.product.price * item.quantity).toFixed(2)}</td>
                            <td className='table-body-item'>
                                <button className="btn-remove" onClick={() => handleRemoveItemByOrder(item)}>
                                    <BsTrash3Fill color='#ff0000' className='icon' />
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </article>
            <div className='order-footer'>
                <div className='order-price'>
                    <span className='order-total'>Total:</span>
                    <span className='order-total'>{totalPrice.toFixed(2)}</span>
                </div>
                <div className='btn-container'>
                    <button 
                        className='btn-cancel'
                        onClick={handleCancelOrder}>Cancelar</button>
                    <button 
                        className='btn-save'
                        disabled={items.length == 0}
                        onClick={() => handleSaveOrder(items)}>Finalizar Pedido!</button>
                </div>
            </div>
        </section>
    )
}