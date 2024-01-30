import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { TodoType } from './components/AddTodo';
import "./components/index.css";
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage<TodoType[]>("todo-list", []);

  const deleteTodo = (todoToDelete: TodoType) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo !== todoToDelete));
  }

  return (
    <div className='todo-card'>
      <AddTodo setTodos={setTodos} todos={todos} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
