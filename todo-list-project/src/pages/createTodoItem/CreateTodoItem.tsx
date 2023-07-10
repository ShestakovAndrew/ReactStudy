import React, {FormEvent, useState} from "react"
import {DropDown} from "../todoList/dropDown/DropDown"
import style from "./CreateTodoItem.module.css"
import {TodoPriority} from "../todoList/model/todo.types";

const CreateTodoItem = () => {
    const [currentPriority, setCurrentPriority] = useState<TodoPriority>(TodoPriority.High)
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submitHandler")
    }

    return (
        <div>
            <DropDown />
            <form onSubmit={submitHandler}>
                <input type="text" className={style.textInputForm} placeholder="Название задачи"/>
                <input type="text" className={style.textInputForm} placeholder="Описание задачи"/>
                <button type='submit' className='btn btn-success mx-auto d-block'>Сохранить</button>
            </form>
        </div>
    )
}

export {
    CreateTodoItem
}
