import {TodoPriority} from "../model/todo.types";

type TodoItemTypeProps = {
    title: string,
    description: string,
    priority: TodoPriority
}


export const TodoListItem = ({title, description, priority}: TodoItemTypeProps) => {
    return (
        <ul>
            <li>{title}</li>
            <li>{description}</li>
            <li>{priority}</li>
        </ul>
    )
}