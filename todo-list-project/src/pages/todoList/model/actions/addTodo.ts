import {createAsyncThunk, Draft, PayloadAction} from "@reduxjs/toolkit"
import {TodoItemData} from "../todo.types"
import {TodoListState} from "../slices/todoSlice"

const saveTodo = createAsyncThunk('todo/save', async (todo: TodoItemData, thunkAPI) => {
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
    return todo
})

const addTodo = (state: Draft<TodoListState>, action: PayloadAction<TodoItemData>) => {
    state.todoList.push(action.payload)
}

export {
    addTodo,
    saveTodo
}