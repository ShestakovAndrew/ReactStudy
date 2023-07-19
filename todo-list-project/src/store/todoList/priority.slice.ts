import {createSlice} from '@reduxjs/toolkit'
import {TodoPriority} from "../../types/todo.types"
import {changeTodoPriorityAction} from "./changeTodoPriority.action"

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
        changePriorityAction: changeTodoPriorityAction
    }
})

export default prioritySlice.reducer
export const {changePriorityAction} = prioritySlice.actions

export type {
    PriorityState
}