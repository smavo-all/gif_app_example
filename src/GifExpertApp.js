import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    // const categories = ['One Piece', 'Shigeki no kioyin', 'Bleach'];
    const [categories, setCategories] = useState(['One Piece', 'Shigeki no kioyin', 'Bleach']);

    // const handleAdd = () => {
    //     setCategories(['Demo de prueba', ...categories]);
    //     console.log(categories)

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category}</li>
                    })
                }
            </ol>

        </>
    )
}

export default GifExpertApp;