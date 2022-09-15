import { useState } from "react";
import TodoAddBar from "./components/TodoAddBar";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className='App'>
      <TodoAddBar
        label='Add todo'
        placeholder='Write a todo...'
        setTodoList={setTodoList}></TodoAddBar>
      <TodoList todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
