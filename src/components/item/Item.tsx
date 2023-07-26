import React from "react";
import './Item.css'

interface ItemProps {
    id: number,
    img: any,
    title: string,
    category: string,
    price: string,
    onAdd: (ItemProps) => void
}

function Item({id, img, title, category, price, onAdd}: ItemProps) {
    return (
        <div className='item'>
            <img src={img} alt={'product'}/>
            <h2>{title}</h2>
            <p>{category}</p>
            <b>{price} $</b>
            <div className="add-to-cart" onClick={() => onAdd({id, img, title, category, price})}>+</div>
        </div>
    )
}

export default Item
