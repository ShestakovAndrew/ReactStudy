import {useAppSelector} from "./baseHooks"

export function useTodoListSelector() {
    return useAppSelector((state) => state.todoList)
}