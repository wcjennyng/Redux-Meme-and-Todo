import { v4 as uuid } from 'uuid'

const INITIAL_STATE = {
    todos: []
}

function rootReducer(state=INITIAL_STATE, action) {
    if ( action.type === "ADD") { 
        return { ...state, todos: [ ...state.todos, { task: action.task, id: uuid()}]}
    } 
    if (action.type === "REMOVE") {
        return {...state, todos: state.todos.filter(todo => todo.id !==action.id)}
    }
    return state
}

export default rootReducer