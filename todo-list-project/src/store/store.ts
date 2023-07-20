import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../pages/createTodoItem/model/todo.slice'
import priorityReducer from '../pages/todoList/model/priority.slice'

const store = configureStore({
    reducer: {
        todo: todoReducer,
        priority: priorityReducer
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch