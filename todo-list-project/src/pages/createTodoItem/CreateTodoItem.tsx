import React, {FormEvent, useState} from "react"
import {DropDown} from "../todoList/dropDown/DropDown"
import styles from "./CreateTodoItem.module.css"
import {TodoPriority} from "../todoList/model/todo.types"
import {useAppDispatch} from "../../redux/hooks/baseHooks"
import {saveTodo} from "../todoList/model/actions/addTodo"
import {useNavigate} from "react-router-dom"

const CreateTodoItem = () => {
    const [todoTitle, setNewTodoTitle] = useState('')
    const [todoDescription, setNewTodoDescription] = useState('')
    const [todoPriority, setTodoPriority] = useState(TodoPriority.High)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        if (todoTitle) {
            await dispatch(saveTodo({
                id: Date.now().toString(),
                title: todoTitle,
                description: todoDescription,
                priority: todoPriority
            }))
            navigate('/todo-list')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className={styles.textInputForm} placeholder="Название задачи" onChange={(event) => setNewTodoTitle(event.target.value)}/>
            <input type="text" className={styles.textInputForm} placeholder="Описание задачи" onChange={(event) => setNewTodoDescription(event.target.value)}/>
            <div className={styles.dropdownContainer}>
                <h5>Приоритет задачи:</h5>
                <DropDown todoPriority={todoPriority} setTodoPriority={setTodoPriority}/>
            </div>
            <button type='submit' className={styles.buttonSuccess}>Сохранить</button>
        </form>
    )
}

export {
    CreateTodoItem
}
