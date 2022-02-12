import React from'react'
import './Todo.css'

function Todo ({task, deleteTodo, id}) {

    function handleRemove() {
        deleteTodo(id)
    }

    return (
        <div>
            <li><h4>{task} <button onClick={handleRemove}>✖</button></h4> </li>
            
        </div>
    )
}

export default Todo