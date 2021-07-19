
import { useEffect, useState } from 'react'
import { FiEdit2, FiTrash, FiCheck } from 'react-icons/fi'

export default function TodoList({ data, handleDoneTodo, handleEditTodo, handleDeleteTodo, currentPage }) {

    const [todoList, setTodoList] = useState([])
    const [updateTitle, setUpdateTitle] = useState(null)
    const [currentPageNo, setCurrentPageNo] = useState(1);
    const [listPerPage, setListPerPage] = useState(3);

    useEffect(() => {
        setTodoList(data)
    }, [data])

    useEffect(() => {
        if (currentPage) {
            setCurrentPageNo(currentPage);
        }
    }, [currentPage])
    
    const indexOfLastItem = currentPageNo * listPerPage;
    const indexOfFirstItem = indexOfLastItem - listPerPage;

    console.log(indexOfFirstItem, indexOfLastItem)

    return (
        <div className="todo-list__container">
            {todoList && todoList.slice(indexOfFirstItem, indexOfLastItem).map((todo, key) => {
                return (
                    <div className="task-container" key={key}>
                        <div className="row" key={key}>
                            {todo.isEditing ? <input style={{width: '100%'}} value={updateTitle || todo.title} onChange={(e) => setUpdateTitle(e.target.value)} className="input-todo" type="text" /> :
                                <div id={todo.id} className="title">{todo.title}</div>
                            }
                            <div className="actions">
                            {todo.isEditing ?  
                                 <button id={todo.id} onClick={() => handleDoneTodo(todo, updateTitle)} className="todo_done"><FiCheck size="1.2rem" color="#3D6FEE" /></button> 
                                 :  
                                 <button id={todo.id} onClick={() => handleEditTodo(todo)} className="todo_edit"><FiEdit2 size="1.2rem" color="#3D6FEE" /></button> }
                                <button onClick={() => handleDeleteTodo(todo.id)} id={todo.id} className="todo_delete"><FiTrash size="1.2rem" color="#FF7979" /></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}