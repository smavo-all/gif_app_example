import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
    import { GifsGridItem } from './GifsGridItem';

const GifGrid = ({ category }) => {

    const {data, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
{
    loading && <p className="animate__flash ">Cargando....</p> 
}

            { <div className="card-grid">

                {
                    data.map(img => (
                        <GifsGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>}
        </>
    )
}

export default GifGrid;