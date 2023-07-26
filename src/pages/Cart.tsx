import React from "react";
import { showEmpty } from "../components/utils/showEmpty";
import { showOrder } from "../components/utils/showOrder";
import './Pages.css'

interface OrderList {
    img: string,
    title: string,
    price: string,
    id: number,
}

interface CartProps {
    orders: OrderList[];
    onDelete: (orderId: number) => void;
}

function Cart({orders, onDelete}: CartProps) {
    return (
        <div className='cart-wrapper'>
            {orders.length === 0 ? showEmpty() : showOrder(orders, onDelete)}
        </div>
    )
}

export default Cart