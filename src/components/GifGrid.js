import React, { useState, useEffect } from 'react'
import { GifsGridItem } from './GifsGridItem';
import getGifs from '../helpers/GetGifs';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( category)
        .then(imgs => setImages (imgs));
    }, [category])


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifsGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;