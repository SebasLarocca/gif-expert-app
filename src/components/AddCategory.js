import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
    
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e)=>{
        // el prevent default a continuación es para que, cada vez que presionamos enter, lo cual provoca un submit, no refresque el navegador
        e.preventDefault();
        setCategories( (cats)=> [inputValue, ...cats ]);
        
    }
    return (
        <form onSubmit = {handleSubmit}>            
            <input 
                type = 'text'
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
        
    )
};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}