import React, { useState } from "react";

import AddTaskForm from './AddTaskForm'
import ToDo from './ToDo'
import UpdateForm from './UpdateForm'

import "bootstrap/dist/css/bootstrap.min.css";

function ToDoApp() {
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
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('')

  };

  // return
  return (
    <div className="container App">
      <br /> <br />
      <h1>To Do List App (ReactJS)</h1>
      <br /> <br />
      
      {updateData && updateData ? ( 
       <UpdateForm 
          updateData = {updateData}
          changeTask = {changeTask}
          updateTask = {updateTask}
          cancelUpdate = {cancelUpdate}
       />
      ) : ( 
        <AddTaskForm 
          newTask = {newTask}
          setNewTask = {setNewTask}
          addTask ={addTask}
        />
      )}     
      
      {/* Create new task */}
      {toDo && toDo.length ? "" : "No Task"}
      
      <ToDo
      toDo = {toDo}
      markDone = {markDone}
      setUpdateData = {setUpdateData}
      deleteTask = {deleteTask}
      />

    </div>
  );
}

export default ToDoApp;
