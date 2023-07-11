import {createSlice} from '@reduxjs/toolkit'
import {TodoPriority} from "../todo.types"
import {changeTodoPriority} from "../actions/changeTodoPriority"

type PriorityState = {
    priority: TodoPriority
}

const initialState: PriorityState = {
    priority: TodoPriority.High
}

const prioritySlice = createSlice({
    name: 'priority',
    initialState,
    reducers: {
        changePriorityAction: changeTodoPriority
    }
})

export default prioritySlice.reducer
export const {changePriorityAction} = prioritySlice.actions

export type {
    PriorityState
}