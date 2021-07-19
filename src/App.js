import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Pagination from "./components/Pagination";
import TodoList from "./components/TodoList";

import { todo } from './data'

import './styles/styles.css';

function App() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setData(todo);
  }, [])

  const handleAddTodo = (todos, refs) => {
    refs.current.value = ""
    if (!todos) {
      return;
    }
    let todo = {
      id: data.length + 1,
      title: todos,
      isEditing: false
    }
    setData(data => [...data, todo])
  }

  const handleDeleteTodo = (todoItem) => {

    setData(data.filter(item => item.id !== todoItem))

  }

  const handleEditTodo = (todoItem) => {
    let updatedTodo = data.map((item, key) => {
      if (item.id === todoItem.id) {
        item.isEditing = true
      }
      return item;
    })
    setData(updatedTodo);
  }


  const handleDoneTodo = (todoItem, todoTitle) => {
    let updatedTodo = data.map((item, key) => {
      if (item.id === todoItem.id) {
        item.isEditing = false
        item.title = todoTitle ? todoTitle : item.title
      }
      return item;
    })
    setData(updatedTodo);
  }

  const handleClick = event => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div className="todoApp">
      <AddTodo
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        data={data}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleDoneTodo={handleDoneTodo}
        currentPage={currentPage}
      />
      <Pagination data={data} handleClick={handleClick}/>
    </div>
  );
}

export default App;
