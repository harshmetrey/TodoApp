import { useRef, useState } from "react"

export default function AddTodo({handleAddTodo}){

    const [todo, setTodo] = useState(null)
    
    const inputRef = useRef();

    return (
        <div className="todo-container">
            <div className="todo-input">
                <input ref={inputRef} onChange={(e) => setTodo(e.target.value)} type="text" autoFocus className="input-todo"/>
                <button onClick={() => {handleAddTodo(todo, inputRef); setTodo('')}} className="todo-add_button">Add</button>
            </div> 
        </div>
    )
}