import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tooggleTodo,deleteTodo } from '../Store/action';

const TodoList = () => {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();


  return (
    <ul>
        {todos.map((todo) => (
            <li key={todo.id} style={{textDecoration: todo.complete ? 'line-through' : 'none'}}>
                {todo.text}
                <button onClick={() => dispatch(tooggleTodo(todo.id))}>
                    {todo.complete ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => dispatch(tooggleTodo(todo.id))}>
                    delete
                </button>


            </li>
        ))}
    </ul>
  )
}

export default TodoList
