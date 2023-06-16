import {TodoPriorityEnum} from "../../../mock/todo.types";

type TodoElementTypeProps = {
    title: string,
    description: string,
    priority: TodoPriorityEnum
}


export const TodoListItem = ({title, description, priority}: TodoElementTypeProps) => {
    return (
        <ul>
            <li>{title}</li>
            <li>{description}</li>
            <li>{priority}</li>
        </ul>
    )
}