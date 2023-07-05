import {Draft, PayloadAction} from "@reduxjs/toolkit"
import {TodoPriority} from "../todo.types"
import {PriorityState} from "../prioritySlice"

const changeTodoPriority = (state: Draft<PriorityState>, action: PayloadAction<TodoPriority>) => {
    state.priority = action.payload
}

export {
    changeTodoPriority
}