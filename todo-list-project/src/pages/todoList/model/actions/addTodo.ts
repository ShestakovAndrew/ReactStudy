import {Draft, PayloadAction} from "@reduxjs/toolkit"
import {TodoItemProps} from "../todo.types"
import {TodoListState} from "../todoSlice"

const addTodo = (state: Draft<TodoListState>, action: PayloadAction<TodoItemProps>) => {
    state.todoList.push({
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
    })
}

export {
    addTodo
}