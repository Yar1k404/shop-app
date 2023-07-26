import React from "react";
import { FaTrash } from "react-icons/fa";
import './Order.css'

interface OrderProps {
    img: string,
    title: string,
    price: string,
    id: number,
    onDelete: (id: number) => number
}

function Order({img, title, price, id, onDelete}: OrderProps) {
    return (
        <div className='order'>
            <img src={img}/>
            <div className="order-info">
                <h2>{title}</h2>
                <b className='order-price'>{price} $</b>
            </div>
            <FaTrash className='delete-order' onClick={() => onDelete(id)}/>
        </div>
    )
}

export default Order