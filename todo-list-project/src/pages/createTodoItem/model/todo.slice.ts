import {createSlice} from '@reduxjs/toolkit'
import {addTodo, saveTodo} from "./addTodo.action"
import {todoListState} from "./todoList.state"

const todoSlice = createSlice({
    name: 'todo',
    initialState: todoListState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(saveTodo.fulfilled, addTodo)
    }
})

export default todoSlice.reducer