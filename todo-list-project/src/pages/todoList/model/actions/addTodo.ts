import {Draft, PayloadAction} from "@reduxjs/toolkit";
import {TodoItemData} from "../todo.types";
import {TodoListState} from "../todoSlice";

const addTodo = (state: Draft<TodoListState>, action: PayloadAction<any>) => {
    const newTodo: TodoItemData = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
    }

    state.todoList.push(newTodo)
}

export {
    addTodo
}