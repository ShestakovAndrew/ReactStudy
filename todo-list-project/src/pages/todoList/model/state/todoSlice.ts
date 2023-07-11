import {createSlice} from '@reduxjs/toolkit'
import {TodoItemData} from "../todo.types"
import {todoList} from "../../../../mock/todoData"
import {addTodo, saveTodo} from "../../../createTodoItem/model/actions/addTodo"

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
        builder.addCase(saveTodo.fulfilled, addTodo)
    }
})

export default todoSlice.reducer

export type {
    TodoListState
}