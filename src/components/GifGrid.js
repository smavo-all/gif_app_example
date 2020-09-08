import React, { useState, useEffect } from 'react'
import { GifsGridItem } from './GifsGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=one piece&limit=10&api_key=FdbJxKPfIe8M0TjVcM8c6iMK0HN2NZeP'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        //console.log(gifs)
        // console.log(data)
        setImages(gifs);
    }

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
           
            {
            images.map( img => (
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