import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { showOrder } from "../utils/showOrder";
import { showEmpty } from "../utils/showEmpty";

import MobileNav from "../mobile-navigation/MobileNav";
import './Navigation.css'

interface OrderList {
    img: string,
    title: string,
    price: string,
    id: number,
}

interface NavigationProps {
    orders: OrderList[];
    onDelete: (orderId: number) => void;
}

function Navigation({orders, onDelete}: NavigationProps) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <div className='nav'>
            <span className="logo" onClick={() => setCartOpen(false)}>
                <NavLink to='/react-shop' className='nav-link'>
                    House Staff
                </NavLink>
            </span>
            <ul className="nav-list">
                <li><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                    className={`shopping-cart-btn ${cartOpen && 'active'}`}/></li>
                <li>
                    <NavLink to='/aboutUs' className='nav-link' onClick={() => setCartOpen(false)}>
                        About us
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contacts' className='nav-link' onClick={() => setCartOpen(false)}>
                        Contacts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/account' className='nav-link' onClick={() => setCartOpen(false)}>
                        Account
                    </NavLink>
                </li>
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