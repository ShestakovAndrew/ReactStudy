import {createAsyncThunk, Draft, PayloadAction} from "@reduxjs/toolkit"
import {TodoItemModel} from "../../../types/todo.types"
import {TodoListState} from "./todoList.state"

const saveTodo = createAsyncThunk('todo/save', async (todoItem: TodoItemModel) => {
    /**
     * const response = await fetch('http://localhost:8000/todo', {
     *     method: 'POST',
     *     headers: {
     *         'Content-Type': 'application/json'
     *     },
     *     body: JSON.stringify({todo})
     * })
     * return response.json()
     */
    return todoItem
})

const addTodo = (state: Draft<TodoListState>, action: PayloadAction<TodoItemModel>) => {
    state.todoList.push(action.payload)
}

export {
    addTodo,
    saveTodo
}