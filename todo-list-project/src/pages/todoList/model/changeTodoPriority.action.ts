import {Draft, PayloadAction} from "@reduxjs/toolkit"
import {TodoPriority} from "../../../types/todo.types"
import {PriorityState} from "./priority.state"

const changeTodoPriority = (state: Draft<PriorityState>, action: PayloadAction<TodoPriority>) => {
    state.priority = action.payload
}

export {
    changeTodoPriority
}