import React, { useState } from "react";
import { products } from "./components/utils/ProductsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Items from "./components/items/Items";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

import './index.css'
import './media.css'

interface OrderList {
    img: string,
    title: string,
    price: string,
    id: number,
}

function App() {
    const [orders, setOrders] = useState<OrderList[]>([])
    const [currentItems, setCurrentItems] = useState(products)

    const addToOrder = (item) => {
        let inArray = false
        orders.forEach(el => {
            if (el.id === item.id) {
                inArray = true
            }
        })
        if (!inArray) {
            setOrders([...orders, item])
        }
    }

    const removeOrder = (id: number): void => {
        setOrders(orders.filter(item => item.id !== id))
    }

    const chooseCategory = (category: string): void => {
        if (category === 'all') {
            setCurrentItems(products)
            return
        }
        setCurrentItems(products.filter(item => item.category === category))
    }

    return (
        <div className="wrapper">
            <Router>
                <Navigation orders={orders} onDelete={removeOrder}/>
                <Routes>
                    <Route path='/shop-app' element={<>
                        <Header/>
                        <Categories chooseCategory={chooseCategory}/>
                        <Items products={currentItems} onAdd={addToOrder}/>
                    </>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/about' element={<AboutUs/>}/>
                    <Route path='/account' element={<Account/>}/>
                    <Route path='/cart' element={<Cart orders={orders} onDelete={removeOrder}/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;