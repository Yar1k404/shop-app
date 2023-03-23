import {FaShoppingCart} from "react-icons/fa";
import {useState} from "react";
import MobileNav from "../mobile-navigation/MobileNav";
import Order from "../order/Order";
import './Navigation.css'

function Navigation({orders, onDelete}) {
    let [cartOpen, setCartOpen] = useState(false)

    const showOrder = () => {
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

    const showEmpty = () => {
        return (
            <h3>Cart is empty</h3>
        )
    }

    return (
        <div className='nav'>
            <span className="logo">House Staff</span>
            <ul className="nav-list">
                <li><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                    className={`shopping-cart-btn ${cartOpen && 'active'}`}/></li>
                <li>About us</li>
                <li>Contacts</li>
                <li>Account</li>
            </ul>

            <MobileNav/>
            {cartOpen && (
                <div className='shop-cart'>
                    {orders.length === 0 ? showEmpty() : showOrder()
                    }
                </div>
            )}
        </div>
    )
}

export default Navigation

