import AddTodo from "./components/TodoApp/TodoApp";
import AppName from "./components/TodoApp/TodoName";
import ShowTodo from "./components/TodoApp/ShowTodo";
import WelcomeMessage from "./components/TodoApp/Welcome";
import "./components/style/App.css";
import { useState } from "react";
function App() {
  const todoArray = [];
  const [todoState, setTodoState] = useState(todoArray);

  const getTodoHandlFunc = (todoName, todoDate) => {
    setTodoState();
    const newTodo = [
      ...todoState,
      {
        todoValue: todoName,
        date: todoDate,
      },
    ];
    setTodoState(newTodo);
  };
  const deleteTodoFunction = (name) => {
    const newTodoItems = todoState.filter((item) => item.todoValue !== name);
    setTodoState(newTodoItems);
  };

  return (
    <>
      <div className="container ">
        <AppName />
        <AddTodo newTodo={getTodoHandlFunc} />

        {todoState.length > 0 ? (
          <ShowTodo
            deleteTodoFunction={deleteTodoFunction}
            todoArray={todoState}
          />
        ) : (
          <WelcomeMessage />
        )}
      </div>
    </>
  );
}

export default App;
