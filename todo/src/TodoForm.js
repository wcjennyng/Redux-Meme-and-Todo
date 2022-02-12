import React, { useState } from 'react'
import './TodoForm.css'

const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState('')

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(task)
        setTask('')
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task:</label>
                <input 
                    name="task"
                    type='text'
                    onChange={handleChange}
                    value={task}
                    placeholder="add a task"
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoForm