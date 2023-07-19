import {useAppSelector} from "./baseHooks"

function useTodoListSelector() {
    return useAppSelector((state) => state.todo.todoList)
}

export {
    useTodoListSelector
}