import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { TodoType } from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const deleteTodo = (todoToDelete: TodoType) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo !== todoToDelete));
  }

  return (
    <>
      <AddTodo setTodos={setTodos} todos={todos} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
