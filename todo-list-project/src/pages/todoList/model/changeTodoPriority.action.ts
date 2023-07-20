import {Draft, PayloadAction} from "@reduxjs/toolkit"
import {TodoPriority} from "../../../types/todo.types"
import {PriorityState} from "./priority.state"

const changeTodoPriority = (state: Draft<PriorityState>, action: PayloadAction<TodoPriority>) => {
    if (action.payload !== state.priority) {
        state.priority = action.payload
    }
}

export {
    changeTodoPriority
}