import React from 'react';

const GifGridItem = ( {img} ) => {
    
    const {url, alt} = img;

    return (
        <div className='card'>
            <img src={url} alt={alt} />
        </div>
     );
}
 
export default GifGridItem;