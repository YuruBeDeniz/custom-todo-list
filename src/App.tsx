import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { TodoType } from './components/AddTodo';
import "./components/index.css";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

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
