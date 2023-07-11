import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"

import {TodoList} from "./pages/todoList/TodoList"
import {CreateTodoItem} from "./pages/createTodoItem/CreateTodoItem"

function App() {
    return (
        <div>
            <Routes>
                <Route path='/todo-list' element={<TodoList />}/>
                <Route path='/create-todo-item' element={<CreateTodoItem />}/>
                <Route path='*' element={<Navigate to='/todo-list' replace />}/>
            </Routes>
        </div>
    )
}

export default App
