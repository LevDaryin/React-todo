import './App.css';
import { useState } from "react";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const changeTodoHandler = (event) => {
    setTodo(event.target.value);
  };

  const addTodoHandler = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodoHandler = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };


  return (
    <div className="App">
      <h1> React Todo App </h1>

      <div className="input-wrapper">
        <input type="text" name="todo" value={todo} placeholder="Create a new todo" onChange={changeTodoHandler} />
        <button className="add-button" onClick={addTodoHandler}>Add</button>
      </div>

      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>

              <button className="delete-button" onClick={() => {deleteTodoHandler(todo)}}>Delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}

export default App;
