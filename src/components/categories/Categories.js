import React, {useState} from "react";
import './Categories.css'

function Categories({chooseCategory}) {
    const [selectedCategory, setSelectedCategory] = useState('all')

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

    const handleCategoryClick = (categoryKey) => {
        setSelectedCategory(categoryKey)
        chooseCategory(categoryKey)
    }

    return (
        <div className='categories'>
            {categories.map(item => (
                <div
                    className={`category ${selectedCategory === item.key ? "selected" : ""}`}
                    key={item.key}
                    onClick={() => handleCategoryClick(item.key)}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default Categories