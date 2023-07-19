import {createSlice} from '@reduxjs/toolkit'
import {TodoItemData} from "../../types/todo.types"
import {todoList} from "../../mock/todoData"
import {addTodoAction, saveTodo} from "../createTodoItem/addTodo.action"

type TodoListState = {
    todoList: TodoItemData[]
}

const initialState: TodoListState = {
    todoList: todoList
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(saveTodo.fulfilled, addTodoAction)
    }
})

export default todoSlice.reducer

export type {
    TodoListState
}