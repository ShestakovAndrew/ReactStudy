import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {ViewTodoList} from "./components/view-todo-list-page/ViewTodoList";
import {Home} from "./components/home-page/Home";
import {CreateTodoElement} from "./components/new-todo-page/CreateTodoElement";
import {NoMatch} from "./components/no-match-page/NoMatch";

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/view-todo-list' element={<ViewTodoList />}/>
          <Route path='/add-new-todo-element' element={<CreateTodoElement />}/>
          <Route path='*' element={<NoMatch />}/>
        </Routes>
      </div>
  )
}

export default App;
