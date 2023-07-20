import {TodoPriority} from "../../../types/todo.types"

type PriorityState = {
    priority: TodoPriority
}

const priorityState: PriorityState = {
    priority: TodoPriority.High
}

export {
    priorityState
}

export type {
    PriorityState
}