import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../pages/todoList/model/slices/todoSlice'
import priorityReducer from '../pages/todoList/model/slices/prioritySlice'

const store = configureStore({
    reducer: {
        todo: todoReducer,
        priority: priorityReducer
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch