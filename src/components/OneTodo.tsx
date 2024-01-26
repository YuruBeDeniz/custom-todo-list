import { TodoType } from "./AddTodo";

type OneTodoProps = {
    todo: TodoType;
    deleteTodo: (todoToDelete: TodoType) => void;
}; 

export default function OneTodo({ todo, deleteTodo }: OneTodoProps) {
  return (
    <div>
        <div>
          {todo.todoName} 
        </div>
        <button onClick={() => deleteTodo(todo)}>
          X
        </button>
    </div>
  )
}
