import {priorityEnumToString, TodoItemProps} from "../model/todo.types"
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoItem = ({title, description, priority}: TodoItemProps) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>{priorityEnumToString(priority)}</td>
        </tr>
    )
}

export {
    TodoItem
}