import React, {useState} from "react";
import './Categories.css'

interface CategoriesList {
    key: string,
    name: string
}

interface CategoriesProps {
    chooseCategory: (categoryKey: string) => void
}

function Categories({chooseCategory}: CategoriesProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    const [categories, setCategories] = useState<CategoriesList[]>([
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

    const handleCategoryClick = (categoryKey: string) => {
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