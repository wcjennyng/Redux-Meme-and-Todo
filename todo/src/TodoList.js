import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
import TodoForm from'./TodoForm.js'

const TodoList = () => {

    const dispatch = useDispatch()
    const todos = useSelector(store => store.todos)

    const handleAdd = (task) => {
        dispatch({ type: "ADD", task})
    }

    const handleRemove = (id) => {
        dispatch({type: "REMOVE", id})
    }

    const todosComp = todos.map(todo=> (
        <Todo
            deleteTodo={handleRemove}
            id={todo.id}
            key={todo.id}
            task={todo.task}
        />
    ))

    return (
        <div>
            <h2>To Do List</h2>
            <TodoForm addTodo={handleAdd} />
            <ul>{todosComp}</ul>
        </div>
    )
}


export default TodoList