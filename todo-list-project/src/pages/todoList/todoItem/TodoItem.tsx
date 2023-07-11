import {priorityEnumToString, TodoItemProps} from "../model/todo.types"

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