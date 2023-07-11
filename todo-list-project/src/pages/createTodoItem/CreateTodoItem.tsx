import React, {FormEvent, useState} from "react"
import {DropDown} from "../todoList/dropDown/DropDown"
import styles from "./CreateTodoItem.module.css"
import {TodoPriority} from "../todoList/model/todo.types"

const CreateTodoItem = () => {
    const [newTodoTitle, setNewTodoTitle] = useState('')
    const [newTodoDescription, setNewTodoDescription] = useState('')
    const [todoPriority, setTodoPriority] = useState(TodoPriority.High)

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()
        //addTodo async
    }

    return (
        <form onSubmit={submitHandler}>
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
