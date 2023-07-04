import {TodoItemProps} from "../model/todo.types"
import 'bootstrap/dist/css/bootstrap.min.css'

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