import {FaShoppingCart} from "react-icons/fa";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {showOrder} from "../utils/showOrder";
import {showEmpty} from "../utils/showEmpty";

import MobileNav from "../mobile-navigation/MobileNav";
import './Navigation.css'

function Navigation({orders, onDelete}) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <div className='nav'>
            <span className="logo">
                <NavLink to='/react-shop' className='nav-link'>
                    House Staff
                </NavLink>
            </span>
            <ul className="nav-list">
                <li><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                    className={`shopping-cart-btn ${cartOpen && 'active'}`}/></li>
                <li>
                    <NavLink to='/aboutUs' className='nav-link'>
                        About us
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contacts' className='nav-link'>
                        Contacts
                    </NavLink>
                </li>
                <li>Account</li>
            </ul>

            <MobileNav/>
            {cartOpen && (
                <div className='shop-cart'>
                    {orders.length === 0 ? showEmpty() : showOrder(orders, onDelete)}
                </div>
            )}
        </div>
    )
}

export default Navigation

