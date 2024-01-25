import { TodoType } from "../App"

type TodosType = {
  todos: TodoType[];
}  

export default function ToDos({ todos }: TodosType) {
    console.log(todos)
  return (
    <div>
        {todos.map((todo: TodoType, index: number) => (
             <li key={index}>{todo.todoName}</li>
        )
        )}
    </div>
  )
}
