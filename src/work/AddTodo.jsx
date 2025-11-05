import React, { useState, useContext } from 'react'; 
import { TodoContext } from './TodoContext'; 
 
function AddTodo() { 
  const [text, setText] = useState(''); 
  const { dispatch } = useContext(TodoContext); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (text.trim()) { 
      dispatch({ type: 'ADD_TODO', payload: text }); 
      setText(''); 
    } 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <input 
        placeholder="Enter a task" 
        value={text} 
         onChange={(e) => setText(e.target.value)} 
      /> 
      <button type="submit">Add</button> 
    </form> 
  ); 
} 
 
export default AddTodo; 