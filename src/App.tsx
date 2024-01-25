import { useState, ChangeEvent, FormEvent} from 'react';
import ToDos from './components/ToDos';

export type TodoType = {
  todoName: string;
}


function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    console.log(todo)
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, { todoName: todo }]);
    setTodo("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>To Do </label>
        <input type='text' value={todo} onChange={handleChange} placeholder='add todo'/>
        <button>Add</button>
      </form>
      <ToDos todos={todos} />
    </>
  )
}

export default App
