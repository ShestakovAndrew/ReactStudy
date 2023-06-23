import {useTodoListSelector} from "../../redux/hooks/useTodoListSelector"
import {TodoItem} from "./todoItem/TodoItem"
import styles from "./TodoList.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavigationBar, PAGE_FIRST, RECORDS_PER_PAGE} from "./navigationBar/NavigationBar"
import {TodoItemData} from "./model/todo.types"
import React, {useState} from "react"

const TodoList = () => {
    const todoList = useTodoListSelector()
    const [currentPage, setCurrentPage] = useState(PAGE_FIRST)

    const lastIndex: number = currentPage * RECORDS_PER_PAGE
    const firstIndex: number = lastIndex - RECORDS_PER_PAGE
    const records: TodoItemData[] = todoList.slice(firstIndex, lastIndex)

    return (
        <div>
            <h1 className={styles.header}>Список дел</h1>

            <table className='table table-striped table-sm'>
                <thead>
                    <th>Заголовок</th>
                    <th>Описание</th>
                    <th>Приоритет</th>
                </thead>
                <tbody>
                {
                    records.map((todoItem: TodoItemData) => (
                        <TodoItem key={todoItem.id}
                                  title={todoItem.title}
                                  description={todoItem.description}
                                  priority={todoItem.priority}
                        />
                    ))
                }
                </tbody>
            </table>

            <NavigationBar currentPage={currentPage} setCurrentPage={setCurrentPage} todoListLength={todoList.length} />

            <div className='d-flex justify-content-center'>
                <button className='btn btn-success'>Добавить новое дело</button>
            </div>
        </div>
    )
}

export {
    TodoList
}
