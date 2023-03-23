import React, {useState} from "react";
import './Categories.css'

function Categories({chooseCategory}) {
    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'All products'
        },
        {
            key: 'chairs',
            name: 'Chairs'
        },
        {
            key: 'tables',
            name: 'Tables'
        },
        {
            key: 'lights',
            name: 'Lights'
        },
        {
            key: 'sofas',
            name: 'Sofas'
        }
    ])

    return (
        <div className='categories'>
            {categories.map(item => (
                <div className='category' key={item.key} onClick={() => chooseCategory(item.key)}>{item.name}</div>
            ))}
        </div>
    )
}

export default Categories