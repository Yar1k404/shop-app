import React from "react";
import Order from "../order/Order";

export const showOrder = (orders, onDelete) => {
    let total = 0
    orders.map(item => {
        total += Number(item.price)
    })

    return (<>
            {orders.map(order => (
                <Order
                    key={order.img}
                    id={order.id}
                    img={order.img}
                    title={order.title}
                    price={order.price}
                    onDelete={onDelete}/>
            ))}
            <p className='total'>Total: {new Intl.NumberFormat().format(total)} $</p>
        </>
    )
}