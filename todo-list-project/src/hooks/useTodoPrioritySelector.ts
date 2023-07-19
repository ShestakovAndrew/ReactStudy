import {useAppSelector} from "./baseHooks"

function useTodoPrioritySelector() {
    return useAppSelector((state) => state.priority.priority)
}

export {
    useTodoPrioritySelector
}