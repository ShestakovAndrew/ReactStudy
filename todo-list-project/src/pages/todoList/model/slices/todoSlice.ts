import {createSlice} from '@reduxjs/toolkit'
import {TodoItemData} from "../todo.types"
import {todoList} from "../../../../mock/todoData"
import {addTodo} from "../actions/addTodo"

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
        addTodoItemAction: addTodo
    }
})

export default todoSlice.reducer
export const {addTodoItemAction} = todoSlice.actions

export type {
    TodoListState
}