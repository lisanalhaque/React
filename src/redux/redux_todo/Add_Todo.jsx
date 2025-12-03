import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Store/action';

const Add_Todo = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()){
            dispatch(addTodo(input));
            setInput('')
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a new Task' 
        />
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default Add_Todo
