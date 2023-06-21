import {useTodoListSelector} from "../../redux/hooks/useTodoListSelector"
import {TodoItem} from "./todoItem/TodoItem"
import styles from "./TodoList.module.css"

const TodoList = () => {
    const todoList = useTodoListSelector()

    return (
        <div>
            <h1 className={styles.header}>Мой список дел</h1>
            {
                todoList.map(todoItem => (
                    <TodoItem key={todoItem.id}
                        title={todoItem.title}
                        description={todoItem.description}
                        priority={todoItem.priority}
                    />
                ))
            }
            <button>Добавить новое дело</button>
        </div>
    )
}

export {
    TodoList
}
