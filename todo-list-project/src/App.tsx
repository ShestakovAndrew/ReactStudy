import React from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"

import {TodoList} from "./pages/todoList/TodoList"
import {CreateTodoItem} from "./pages/createTodoItem/CreateTodoItem"
import {NotFound} from "./pages/notFound/NotFound"

function App() {
  return (
      <div>
        <Routes>
          <Route path='/todo-list' element={<TodoList />}/>
          <Route path='/create-todo-item' element={<CreateTodoItem />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
  )
}

export default App
