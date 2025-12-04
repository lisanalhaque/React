import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tooggleTodo,deleteTodo } from '../Store/action';
const TodoList = () => {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={() => dispatch(tooggleTodo(todo.id))}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList