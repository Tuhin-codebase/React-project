import ShowTodo from "./ShowTodo";
import { useRef } from "react";
import { IoBagAddSharp } from "react-icons/io5";
import { Todo_items } from "../../store/Todo-items-store";
import { useContext } from "react";
const AddTodo = () => {
  const { addTodoItems } = useContext(Todo_items);

  const onNameValueRef = useRef();
  const onDateValueRef = useRef();

  const addTodoFunction = () => {
    const inputValue = onNameValueRef.current.value;
    const inputDate = onDateValueRef.current.value;
    onNameValueRef.current.value = "";
    onDateValueRef.current.value = "";
    addTodoItems(inputValue, inputDate);
  };

  return (
    <div className="container">
      <div className="row kg_row ">
        <div className="col-6">
          <input ref={onNameValueRef} type="text" placeholder="Enter Todo ? " />
        </div>
        <div className="col-4">
          <input ref={onDateValueRef} type="date" name="date" id="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={addTodoFunction}
            className="btn btn-success "
          >
            <IoBagAddSharp />
          </button>
        </div>
      </div>
      <ShowTodo />
    </div>
  );
};

export default AddTodo;
