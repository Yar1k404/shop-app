import Item from "../item/Item";
import {products} from '../utils/ProductsList'
import './Items.css'

function Items({onAdd}) {
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