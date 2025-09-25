/* eslint-disable no-unused-vars */
import AddTodo from "./components/TodoApp/TodoApp";
import AppName from "./components/TodoApp/TodoName";
import ShowTodo from "./components/TodoApp/ShowTodo";
import "./components/style/App.css";
import { useState, useReducer } from "react";
import { Todo_items } from "./store/Todo-items-store";
import TodoItmesContextProvider from "./store/Todo-items-store";

function App() {
  return (
    <>
      <TodoItmesContextProvider>
        <div className="container">
          <AppName />
          <AddTodo />
        </div>
      </TodoItmesContextProvider>
    </>
  );
}

export default App;
