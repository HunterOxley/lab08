import React, { useState, useRef } from 'react';
import './App.css'; // Make sure you have an App.css file in your src folder

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  const addTodo = () => {
    const text = todoRef.current.value;
    if (text !== '') {
      setTodos((prevTodos) => [...prevTodos, text]);
      todoRef.current.value = '';
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="inputContainer">
        <input type="text" ref={todoRef} className="todoInput" />
      </div>
      <button onClick={addTodo} className="addButton">Add</button>
      <ul className="todoList">
        {todos.map((todo, index) => (
          <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
            {todo}
            <button onClick={() => removeTodo(index)} className="removeButton">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

