import React, {useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputText, setInputText] = useState('')
    
    const handleInputTextChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputText.trim().length > 2 ){

            setCategories( cats => [inputText, ...cats]);
            setInputText('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                value = { inputText }
                onChange = { handleInputTextChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

