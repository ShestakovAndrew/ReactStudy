import {createSlice} from '@reduxjs/toolkit'
import {TodoItem} from "../../pages/todoList/model/todo.types";
import {todoList} from "../../mock/todoData";

type InitialStateType = {
    todoList: TodoItem[]
}

const initialState: InitialStateType = {
    todoList: todoList
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            //add new element
        }
    }
})

export default todoSlice.reducer
export const {add} = todoSlice.actions