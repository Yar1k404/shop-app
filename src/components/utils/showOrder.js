import Order from "../order/Order";

export const showOrder = (orders, onDelete) => {
    let total = 0
    orders.map(item => {
        total += Number.parseFloat(item.price)
    })

    return (<>
            {orders.map(item => (
                <Order
                    key={item.img}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    onDelete={onDelete}/>
            ))}
            <p className='total'>Total: {new Intl.NumberFormat().format(total)} $</p>
        </>
    )
}