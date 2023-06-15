import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {ViewTodoList} from "./pages/todo-list-page/ViewTodoList";
import {CreateTodoElement} from "./pages/createTodoPages/CreateTodoElement";
import {NoMatch} from "./pages/noMatchPage/NoMatch";
import {PageNavigationBar} from "./pages/todo-list-page/PageNavigationBar";

function App() {
  return (
      <div>
        <PageNavigationBar />
        <Routes>
          <Route path='/view-todo-list' element={<ViewTodoList />}/>
          <Route path='/add-new-todo-element' element={<CreateTodoElement />}/>
          <Route path='*' element={<NoMatch />}/>
        </Routes>
      </div>
  )
}

export default App;
