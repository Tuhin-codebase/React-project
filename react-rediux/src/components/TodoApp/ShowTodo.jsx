const ShowTodo = ({ todoArray, deleteTodoFunction }) => {
  return (
    <div className="container">
      <div className="row kg_row">
        {todoArray.map(({ todoValue, date }) => {
          return (
            <div className="d-flex justify-content-between" key={date}>
              <div>{todoValue}</div>
              <div>{date}</div>
              <div className=" button">
                <button
                  type="button"
                  onClick={() => deleteTodoFunction(todoValue)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTodo;
