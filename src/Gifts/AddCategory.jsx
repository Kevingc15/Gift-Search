import {useState} from 'react';

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')
    
    const inputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onAddCategory(inputValue);
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Busca Gifs"
            value={inputValue}
            onChange={inputChange}
        />
    </form>
  )
}
