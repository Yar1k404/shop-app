import {showEmpty} from "../components/utils/showEmpty";
import {showOrder} from "../components/utils/showOrder";
import './Pages.css'

function Cart({orders, onDelete}) {
    return (
        <div className='cart-wrapper'>
            {orders.length === 0 ? showEmpty() : showOrder(orders, onDelete)}
        </div>
    )
}

export default Cart