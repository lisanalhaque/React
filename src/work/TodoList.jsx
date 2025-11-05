import React, { useContext } from 'react'; 
import { TodoContext } from './TodoContext'; 
 
function TodoList() { 
  const { state, dispatch } = useContext(TodoContext); 
 
  if (state.length === 0) return <p>No todos yet!</p>; 
 
  return ( 
    <ul> 
      {state.map((todo) => ( 
        <li key={todo.id} style={{ marginBottom: '10px' }}> 
          <span 
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id 
})} 
            style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none', 
              cursor: 'pointer' 
            }} 
          > 
            {todo.text} 
          </span> 
          <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: 
todo.id })}> 
            ✅
          </button> 
        </li> 
      ))} 
    </ul> 
  ); 
} 
 
export default TodoList; 