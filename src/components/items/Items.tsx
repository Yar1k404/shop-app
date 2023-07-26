import React from "react";
import Item from "../item/Item";
import './Items.css'

interface Product {
    id: number,
    title: string,
    img: any,
    category: string,
    price: string,
}

interface ItemsProps {
    products: Product[],
    onAdd: (id: number) => void
}

function Items({products, onAdd}: ItemsProps) {
    return (
        <main>
            {products.map(item => {
                return <Item
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    onAdd={onAdd}/>
            })}
        </main>
    )
}

export default Items