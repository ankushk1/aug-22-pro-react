import React, { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([
    {
      id: "30af0edf",
      text: "Todo 1"
    },
    {
      id: "2e1afa76",
      text: "Todo 2"
    }
  ]);
  const [editState, setEditState] = useState({
    editing: false,
    todoId: null
  });

  const onAddTodoHandler = () => {
    // const newTodoObj = {
    //   id: crypto.randomUUID().split("-")[0],
    //   text: input
    // };

    // const copyArr = [...todoArr, newTodoObj] ;
    // copyArr.push(newTodoObj);
    if (!input) return;
    setTodoArr([
      ...todoArr,
      {
        id: crypto.randomUUID().split("-")[0],
        text: input
      }
    ]);
    setInput("");
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      editState.editing ? onUpdateHandler() : onAddTodoHandler();
    }
  };

  const onDeleteHandler = (id) => {
    const filterArr = todoArr.filter((elem) => elem.id !== id);
    setTodoArr(filterArr);

    // TODO: Try to implement this using splice
  };

  const onEditHandler = ({ id, text }) => {
    setInput(text);
    setEditState({ editing: true, todoId: id });
  };

  const onUpdateHandler = () => {
    const copyArr = [...todoArr];
    // Find the index of element you want to update
    const index = copyArr.findIndex((elem) => elem.id === editState.todoId);
    // creating new object with updated value/input
    const newObj = {
      id: editState.todoId,
      text: input
    };
    // using index to update
    copyArr[index] = newObj;
    setTodoArr(copyArr);
    setEditState({ editing: false, todoId: null });
    setInput("");

    // TODO: Try to implement this using splice
  };

  return (
    <div>
      <div className="fs-2 my-4">TodoApp</div>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Please Add Todo"
          className="form-control w-50 me-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => onPressEnter(e)}
        />
        {editState.editing ? (
          <button className="btn btn-warning" onClick={onUpdateHandler}>
            Update Todo
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onAddTodoHandler}>
            Add Todo
          </button>
        )}
      </div>

      <div className="d-flex flex-column align-items-center">
        {todoArr.map((elem, idx) => (
          <div key={idx} className="row  mt-4 w-75">
            <div className="offset-1 col-6 text-start fs-3">{elem.text}</div>
            <div className=" offset-1 col-3">
              <button
                className="btn btn-info me-3"
                onClick={() => onEditHandler(elem)}
              >
                Edit{" "}
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteHandler(elem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
