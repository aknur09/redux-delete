import React, { useState } from 'react';

const TodoReact = () => {
  const [newToDo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const inp = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const formData = e.target;
    let newToDoInp = { title: formData.title.value, id: Math.random() };
    setTodos([...todos, newToDoInp]);
    formData.reset();
  };

  return (
    <div>
      <h2>Todo React</h2>
      <form onSubmit={addTodo}>
        <input type="text" name="title" onChange={inp} value={newToDo} />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoReact;

