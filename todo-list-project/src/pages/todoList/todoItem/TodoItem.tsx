import {TodoPriority} from "../model/todo.types"
import 'bootstrap/dist/css/bootstrap.min.css'

type TodoItemProps = {
    title: string,
    description: string,
    priority: TodoPriority
}

const TodoItem = ({title, description, priority}: TodoItemProps) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>{priority}</td>
        </tr>
    )
}

export {
    TodoItem
}