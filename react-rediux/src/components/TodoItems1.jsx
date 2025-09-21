const TodoItems1 = () => {
  let todoName = "Buy Miik";
  let todoDate = "2/10/2023";
  return (
    <div className="container">
      <div className="row kg_row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 button">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItems1;
