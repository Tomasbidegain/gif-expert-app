import React, { useState } from 'react';


const AddCategory = ({ setCategorias }) => {
    
    // State del input
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //Funcion del submit cuando haga enter dentro del form

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategorias( cats => [inputValue, ...cats])
            setInputValue('');
        }
    }

    return ( 
        <>
            <form className='busqueda' onSubmit={handleSubmit}>
                <input
                type="text" 
                id="search" 
                placeholder="Buscar GIFS..."
                value={inputValue}
                onChange={handleInputChange}
                />
            </form>
        </>
     );
}
 
export default AddCategory;