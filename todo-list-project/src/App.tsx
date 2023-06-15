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
          <Route index path='/view-todo-list' element={<TodoList />}/>
          <Route path='/add-new-todo-element' element={<CreateTodoItem />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
  )
}

export default App;
