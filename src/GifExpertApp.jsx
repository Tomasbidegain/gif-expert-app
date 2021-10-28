import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import Header from './components/Header';
import Footer from './components/Footer'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([])


    return ( 
        <>
            <Header />
            <div>
                <AddCategory 
                    setCategorias = {setCategorias}
                />
            </div>

            <div>
                {
                    categorias.map( categoria => {
                        return  <GifGrid
                                    key={categoria}
                                    categoria = {categoria}
                                />
                    })
                }
            </div>
            <Footer />
        </>

     );
}
 
export default GifExpertApp;