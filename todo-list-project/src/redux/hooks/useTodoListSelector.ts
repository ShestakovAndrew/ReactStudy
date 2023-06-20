import {useAppSelector} from "./baseHooks"

function useTodoListSelector() {
    return useAppSelector((state) => state.todoList)
}

export {
    useTodoListSelector
}