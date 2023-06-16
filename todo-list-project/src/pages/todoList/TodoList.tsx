import {useTodoListSelector} from "../../redux/hooks/useTodoListSelector";
import {TodoElementType} from "../../mock/todo.types";
import {TodoListItem} from "./todoListItem/TodoListItem";

export const TodoList = () => {
    const todoList: TodoElementType[] = useTodoListSelector()

    return (
        <div>
            <h2>Мой список дел</h2>
            {
                todoList.map(todoItem => (
                    <TodoListItem
                        title={todoItem.title}
                        description={todoItem.description}
                        priority={todoItem.priority}
                    />
                    )
                )
            }
            <button>Добавить новое дело</button>
        </div>
    )
}
