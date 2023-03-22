import React, {useState} from "react";
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Items from "./components/items/Items";
import Footer from "./components/footer/Footer";
import './index.css'
import './media.css'


function App() {
    const [orders, setOrders] = useState([])

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

    return (
        <div className="wrapper">
            <Navigation orders={orders} onDelete={removeOrder}/>
            <Header/>
            <Items onAdd={addToOrder}/>
            <Footer/>
        </div>
    );
}

export default App;
