import ShowTodo from "./ShowTodo";
import { useState } from "react";
const AddTodo = ({ newTodo }) => {
  const [inputValue, setInputValue] = useState();
  const [inputDate, setInputDate] = useState();
  const changeTodoName = (event) => {
    setInputValue(event.target.value);
  };

  const changeINputDate = (event) => {
    setInputDate(event.target.value);
  };

  const addTodoFunction = () => {
    newTodo(inputValue, inputDate);
    setInputValue("");
    setInputDate("");
  };

  return (
    <div className="container">
      <div className="row kg_row ">
        <div className="col-6">
          <input
            type="text"
            onChange={changeTodoName}
            placeholder="Enter Todo ? "
            value={inputValue}
          />
        </div>
        <div className="col-4">
          <input
            value={inputDate}
            onChange={changeINputDate}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={addTodoFunction}
            className="btn btn-success "
          >
            add
          </button>
        </div>
      </div>
      {/* <ShowTodo /> */}
    </div>
  );
};

export default AddTodo;
