import React, {useState} from "react";
import {products} from "./components/utils/ProductsList";
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Items from "./components/items/Items";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import './index.css'
import './media.css'

function App() {
    const [orders, setOrders] = useState([])
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

    const removeOrder = (id) => {
        setOrders(orders.filter(item => item.id !== id))
    }

    const chooseCategory = (category) => {
        if (category === 'all') {
            setCurrentItems(products)
            return
        }
        setCurrentItems(products.filter(item => item.category === category))
    }

    return (
        <div className="wrapper">
            <Navigation orders={orders} onDelete={removeOrder}/>
            <Header/>
            <Categories chooseCategory={chooseCategory}/>
            <Items products={currentItems} onAdd={addToOrder}/>
            <Footer/>
        </div>
    );
}

export default App;
