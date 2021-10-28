import React from 'react';
import GifGridItem from './GifGridItem';
import { useFechGifs } from '../hooks/useFechGifs';

const GifGrid = ( {categoria} ) => {
    
    const {data: image, loading} = useFechGifs(categoria)

    return ( 
        <div className='grid'>
            <h3 className="title-gif">Gifs de {categoria.charAt(0).toUpperCase()+ categoria.slice(1)}</h3>
            {loading && <p className='card-loading'>Buscando gifs...</p>}
            <div className='card-grid'>
                {
                    image.map(img => (
                        <GifGridItem 
                            key={img.id}
                            img={img}
                        />
                    ))
                }
            </div>
            <hr />
        </div>
    );
}
 
export default GifGrid;