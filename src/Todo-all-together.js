import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

import "./App.css";

function TodoAllTogether() {
  const [toDo, setToDo] = useState([
    { id: 2, title: "task 2", status: false },
    { id: 1, title: "task 1", status: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  //Delete Task
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  //Mark Done
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  //update Task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //update Task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  // return
  return (
    <div className="container App">
      <br /> <br />
      <h1>To Do List App (ReactJS)</h1>
      <br /> <br />
      {updateData && updateData ? (
        <>
          {/*Update Task */}
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button
                onClick={updateTask}
                className="btn btn-lg btn-success mr-20">
                Update
              </button> 
              <button onClick={cancelUpdate} 
              className="btn btn-lg btn-warning">
                Cancle
              </button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          {/*Add Task */}
          <div className="row">
            <div className="col">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button onClick={addTask} className="btn btn-lg btn-success">
                Add
              </button>
            </div>
          </div>
          <br />
        </>
      )}
      {/* Create new task */}
      {toDo && toDo.length ? "" : "No Task"}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  {/* seclect task */}
                  <div className="iconsWrap">
                    <span
                      title="Completed / Not Completed"
                      onClick={() => markDone(task.id)}>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {/* update Data */}
                    {task.status ? null : (
                      <span
                        title="Edit"
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </span>
                    )}
                    {/* Delete Task */}
                      <span title="Delete" onClick={(e) => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default TodoAllTogether;
