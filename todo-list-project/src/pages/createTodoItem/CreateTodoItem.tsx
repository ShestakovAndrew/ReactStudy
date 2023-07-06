import React from "react"
import {DropDown} from "../todoList/dropDown/DropDown"

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
            <DropDown />
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
