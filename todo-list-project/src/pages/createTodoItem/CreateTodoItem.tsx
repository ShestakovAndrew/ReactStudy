import React from "react"
import {PriorityDropDown} from "../todoList/priorityDropDown/PriorityDropDown"

const CreateTodoItem = () => {
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Название</label>
                <input type="text" className="form-control" placeholder="Название задачи"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Описание</label>
                <input type="text" className="form-control" placeholder="Описание задачи"/>
            </div>
            <PriorityDropDown />
            <div className='d-flex justify-content-center'>
                <button className='btn btn-success'>
                    Сохранить
                </button>
            </div>
        </form>

    )
}

export {
    CreateTodoItem
}
