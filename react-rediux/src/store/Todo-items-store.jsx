/* eslint-disable react-refresh/only-export-components */
// this a Todo-items-sore.jsx file

import { createContext, useReducer } from "react";

export const Todo_items = createContext();

const TodoItmesContextProvider = ({ children }) => {
  const reducerFunction = (currentState, action) => {
    let TodoItems = currentState;
    if (action.type === "NEW_ITEM") {
      TodoItems = [
        ...currentState,
        {
          TodoName: action.payload.todoName,
          date: action.payload.todoDate,
        },
      ];
    } else if (action.type === "DELETE_ITEM") {
      TodoItems = currentState.filter(
        (item) => item.todoValue !== action.payload.deleteItemsName
      );
    }
    return TodoItems;
  };

  const reducerIntiValue = [];
  const [todoState, dashpatch] = useReducer(reducerFunction, reducerIntiValue);

  const addTodoItems = (todoName, todoDate) => {
    const newItems = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dashpatch(newItems);
  };

  const deleteItems = (name) => {
    const deleteItems = {
      type: "DELETE_ITEM",
      payload: {
        deleteItemsName: name,
      },
    };
    dashpatch(deleteItems);
  };

  return (
    <Todo_items.Provider value={{ deleteItems, addTodoItems, todoState }}>
      {children}
    </Todo_items.Provider>
  );
};

export default TodoItmesContextProvider;
