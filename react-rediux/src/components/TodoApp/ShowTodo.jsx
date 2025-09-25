import { useContext } from "react";
import { Todo_items } from "../../store/Todo-items-store";
import { MdDeleteForever } from "react-icons/md";
import WelcomeMessage from "./Welcome";
const ShowTodo = () => {
  const { todoState, deleteItems } = useContext(Todo_items);

  return todoState.length > 0 ? (
    <div className="container">
      <div className="row kg_row">
        {todoState.map((todo) => {
          return (
            <div className="d-flex justify-content-between" key={todo.date}>
              <div>{todo.TodoName}</div>
              <div>{todo.date}</div>
              <div className=" button">
                <button
                  type="button"
                  onClick={() => deleteItems(todoState.dueDate)}
                  className="btn btn-danger"
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <WelcomeMessage />
  );
};

export default ShowTodo;
