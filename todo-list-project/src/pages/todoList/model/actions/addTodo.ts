import {Draft, PayloadAction} from "@reduxjs/toolkit"
import {TodoItemData, TodoItemProps} from "../todo.types"
import {TodoListState} from "../todoSlice"

const addTodo = (state: Draft<TodoListState>, action: PayloadAction<TodoItemProps>) => {
    const newTodo: TodoItemData = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
    }

    state.todoList.push(newTodo)
}

export {
    addTodo
}