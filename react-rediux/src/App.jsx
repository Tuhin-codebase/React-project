import AppName from "./components/AppName";
import TodoItems2 from "./components/TodoItems2";
import TodoItems1 from "./components/TodoItems1";
import AddTodo from "./components/AddTodo";
import "./assets/style/App.css";
function App() {
  return (
    <>
      <center>
        <div className="todo_container">
          <AppName />
          <AddTodo />
          <div className="items_container">
            <TodoItems1 />
            <TodoItems2 />
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
