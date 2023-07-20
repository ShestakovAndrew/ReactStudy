import {TodoItemModel} from "../../../types/todo.types"
import {todoList} from "../../../mock/todoListData"

type TodoListState = {
    todoList: TodoItemModel[]
}

const todoListState: TodoListState = {
    todoList: todoList
}

export {
    todoListState
}

export type {
    TodoListState
}