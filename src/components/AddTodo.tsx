import { useState, ChangeEvent, FormEvent} from 'react';

export type TodoType = {
  todoName: string;
}

type AddTodoProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function AddTodo({ todos, setTodos }: AddTodoProps) {
  const [todo, setTodo] = useState<string>("");

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todo} onChange={handleChange} placeholder='add todo'/>
        <button>Add</button>
      </form>
    </div>
  )
}
