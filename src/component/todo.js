import React, { useState } from "react";
import "./todo.css";
import todoIcon from "../images/todo-icon.png";

const Todo = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addToList = () => {
    if (!toDo) {
    } else {
      setToDoList([...toDoList, toDo]);
      setToDo("");
    }
  };

  const deleteTodo = (toDoId) => {
    const updatedToDoList = toDoList.filter((element,index) => {
        return index !== toDoId;
    })
    setToDoList(updatedToDoList)
  }

  const makeToDoListEmpty = () =>{
    setToDoList([])
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoIcon} alt="Todo List Icon" />
            <figcaption>Got Shit to do? Make a List Now!!</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="I have to . . . . . . ."
              value={toDo}
              onChange={(e) => setToDo(e.target.value)}
            />

            <i
              className="fa fa-plus add-btn"
              title="Add"
              onClick={addToList}
            ></i>
          </div>

          <div className="showItems">
            {toDoList.map((element, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3> {element} </h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete"
                    onClick={() => deleteTodo(index)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Clear List" onClick={makeToDoListEmpty}>
              <span>To Do List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
