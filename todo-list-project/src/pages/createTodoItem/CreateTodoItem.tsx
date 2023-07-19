import React, {FormEvent, useState} from "react"
import {useNavigate} from "react-router-dom"
import {DropDown} from "../todoList/dropDown/DropDown"
import {TodoPriority} from "../../types/todo.types"
import {useAppDispatch} from "../../hooks/baseHooks"
import {saveTodo} from "../../store/createTodoItem/addTodo.action"

import styles from "./CreateTodoItem.module.css"

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
                <h4>Приоритет задачи:</h4>
                <DropDown todoPriority={todoPriority} setTodoPriority={setTodoPriority}/>
            </div>
            <button type='submit' className={styles.buttonSuccess}>Сохранить</button>
        </form>
    )
}

export {
    CreateTodoItem
}
