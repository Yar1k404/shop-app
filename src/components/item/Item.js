import './Item.css'

function Item({id, img, title, category, price, onAdd}) {
    return (
        <div className='item'>
            <img src={img}/>
            <h2>{title}</h2>
            <p>{category}</p>
            <b>{price} $</b>
            <div className="add-to-cart" onClick={() => onAdd({id, img, title, category, price})}>+</div>
        </div>
    )
}

export default Item
