import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    const [categories, setCategories] = useState([''])

    // // para agegar un elemento al arreglo, funciona con ...categorias, no con push
    // const handleAdd = ()=>{
    //     setCategories( [...categories, 'Hulk' ])
    // };

    return (
        <>
        <h2 className='animate__animated animate__bounceIn' >Gif Expert App</h2>
        <AddCategory setCategories={ setCategories } />
        <br/>
        
        <ul>
            {/* acá no usa el for por que no es un metodo que retorne algo, y lo que necesito es eso, un return, que en este map queda implísito */}
            {/* el key = {categorie} es por que en base al key, react va a identificar el elemento */}
            {
                categories.map(  categorie  => 
                    <GifGrid 
                        key = { categorie }
                        category = { categorie }/> )    
            }
            
        </ul>
        </>
    )
};

export default GifExpertApp