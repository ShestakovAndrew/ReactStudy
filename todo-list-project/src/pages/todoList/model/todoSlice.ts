import {createSlice} from '@reduxjs/toolkit'
import {TodoItemData} from "./todo.types"
import {todoList} from "../../../mock/todoData"

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
        addTodo: (state, action) => {
            const newTodo: TodoItemData = {
                id: Date.now().toString(),
                title: action.payload.title,
                description: action.payload.description,
                priority: action.payload.priority,
            }

            state.todoList.push(newTodo)
        }
    }
})

export default todoSlice.reducer
export const {addTodo} = todoSlice.actions