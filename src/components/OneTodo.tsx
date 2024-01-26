import { TodoType } from "./AddTodo";

type OneTodoProps = {
    todo: TodoType;
    deleteTodo: (todoToDelete: TodoType) => void;
}; 

export default function OneTodo({ todo, deleteTodo }: OneTodoProps) {
  return (
    <div className="one-todo">
        <div>
          {todo.todoName} 
        </div>
        <button className="delete-button" onClick={() => deleteTodo(todo)}>
          X
        </button>
    </div>
  )
}
