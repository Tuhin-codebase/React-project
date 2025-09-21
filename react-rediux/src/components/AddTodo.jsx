const AddTodo = () => {
  return (
    <div className="container">
      <div className="row kg_row ">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo ? " />
        </div>
        <div className="col-4">
          <input type="date" name="date" id="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success ">
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
