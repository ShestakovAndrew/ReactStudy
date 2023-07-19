import {useAppSelector} from "./baseHooks"

function useTodoListSelector() {
    return useAppSelector((state) => state.todo.todoList)
}

function useTodoPrioritySelector() {
    return useAppSelector((state) => state.priority.priority)
}

export {
    useTodoListSelector,
    useTodoPrioritySelector
}