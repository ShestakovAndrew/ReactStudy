import {useTodoListSelector} from "../../redux/hooks/useTodoListSelector";
import {TodoItemType} from "./model/todo.types";
import {TodoItem} from "./todoItem/TodoItem";

export const TodoList = () => {
    const todoList: TodoItemType[] = useTodoListSelector()

    return (
        <div>
            <h2>Мой список дел</h2>
            {
                todoList.map(todoItem => (
                    <TodoItem key={todoItem.id}
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
