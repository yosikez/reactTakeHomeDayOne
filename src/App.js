import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Input from './componens/Input/Input';
import Button from './componens/Button/Button';

function App() {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {
      text: "Awal",
      isDone: false
    }
  ]);

  const getValue = (e) => {
    setValue(e.target.value);
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isDone: false }];
    setTodos(newTodos);
    Input.value = "";
  }

  const Create = () => {
    setValue("");
    value == "" ? alert("Masukan To Do List Anda") :  addTodo(value);
  }

  const isDone = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  function Todo({ todo, index, isDone, removeTodo }) {
    return (
      <div className="Todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div className='Button-action'>
          <Button action={() => isDone(index)} bName={"✓"} />
          <Button action={() => removeTodo(index)} bName={"✕"} />
        </div>
      </div>
    );
  }


  return (
    <div className="App">

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todo List React</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="container">
        <div className="card">
          <h1>Add</h1>
          <div className="Todo-add ">
            <Input getValue={getValue} name={"Todos"} value={value}/>
            <Button action={Create} bName={"+"} />
          </div>
        </div>

        
        { todos.length > 0 ? <div className="card">
          <h1>To Do List</h1>
            {
              todos.map((todo, index) => (
                <Todo todo={todo} key={index} index={index} isDone={isDone} removeTodo={removeTodo} />
              ))
            }

        </div> : " "}
      </div>

    </div>
  );
}

export default App;
