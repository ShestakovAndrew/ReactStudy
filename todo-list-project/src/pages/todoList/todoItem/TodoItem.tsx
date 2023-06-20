import {TodoPriority} from "../model/todo.types"

type TodoItemProps = {
    title: string,
    description: string,
    priority: TodoPriority
}

const TodoItem = ({title, description, priority}: TodoItemProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{priority}</p>
        </div>
    )
}

export {
    TodoItem
}