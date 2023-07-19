import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoList/todo.slice'
import priorityReducer from './todoList/priority.slice'

const store = configureStore({
    reducer: {
        todo: todoReducer,
        priority: priorityReducer
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch