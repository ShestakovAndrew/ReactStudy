import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {ViewTodoList} from "./components/view-todo-list-page/ViewTodoList";
import {CreateTodoElement} from "./components/new-todo-page/CreateTodoElement";
import {NoMatch} from "./components/no-match-page/NoMatch";
import {PageNavigationBar} from "./components/PageNavigationBar";

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
