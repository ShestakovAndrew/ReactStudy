import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {useTodoListSelector} from "../../hooks/useTodoListSelector"
import {useTodoPrioritySelector} from "../../hooks/useTodoPrioritySelector"
import {TodoItemModel, TodoPriority} from "../../types/todo.types"
import {TodoItem} from "./todoItem/TodoItem"
import {PAGE_FIRST, Pagination, RECORDS_PER_PAGE} from "./pagination/Pagination"
import {DropDown} from "./dropDown/DropDown"
import styles from "./TodoList.module.css"

const TodoList = () => {
    const navigate = useNavigate()
    const todoList: TodoItemModel[] = useTodoListSelector()
    const selectedPriority: TodoPriority = useTodoPrioritySelector()

    const [currentPage, setCurrentPage] = useState<number>(PAGE_FIRST)
    const [lastIndex, setLastIndex] = useState<number>(PAGE_FIRST * RECORDS_PER_PAGE)
    const [firstIndex, setFirstIndex] = useState<number>(lastIndex - RECORDS_PER_PAGE)
    const [todoListView, setTodoListView] = useState<TodoItemModel[]>(todoList.slice(firstIndex, lastIndex))
    const [todoPriority, setTodoPriority] = useState<TodoPriority>(TodoPriority.High)

    useEffect(() => {
        const compareByPriority = (firstTodoItem: TodoItemModel, secondTodoItem: TodoItemModel) => {
            if (firstTodoItem.priority === selectedPriority && secondTodoItem.priority === selectedPriority) return 2
            else if (secondTodoItem.priority === selectedPriority) return 1
            else if (firstTodoItem.priority === selectedPriority) return -1
            return secondTodoItem.priority - firstTodoItem.priority
        }
        const todoListSorted: TodoItemModel[] = [...todoList].sort(compareByPriority)

        setLastIndex(currentPage * RECORDS_PER_PAGE)
        setFirstIndex(lastIndex - RECORDS_PER_PAGE)
        setTodoListView(todoListSorted.slice(firstIndex, lastIndex))
    }, [currentPage, firstIndex, lastIndex, selectedPriority, todoList])

    return (
        <div>
            <h1 className={styles.header}>Список дел</h1>
            <DropDown todoPriority={todoPriority} setTodoPriority={setTodoPriority} isChangeStoreTodoPriority/>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Заголовок</th>
                        <th>Описание</th>
                        <th>Приоритет</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todoListView.map((todoItem: TodoItemModel) => (
                        <TodoItem key={todoItem.id}
                                  title={todoItem.title}
                                  description={todoItem.description}
                                  priority={todoItem.priority}/>
                    ))
                }
                </tbody>
            </table>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} todoListLength={todoList.length}/>
            <button className={styles.buttonSuccess} onClick={() => navigate('/create-todo-item')}>
                Добавить новое дело
            </button>
        </div>
    )
}

export {
    TodoList
}
