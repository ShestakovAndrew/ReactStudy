import {TodoPriority} from "../model/todo.types"

type TodoItemProps = {
    title: string,
    description: string,
    priority: TodoPriority
}

export const TodoItem = ({title, description, priority}: TodoItemProps) => {
    return (
        <ul>
            <li>{title}</li>
            <li>{description}</li>
            <li>{priority}</li>
        </ul>
    )
}