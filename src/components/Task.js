import React from "react";

function Task({text, category, onDeleteTask, id}) {

  function deleteTask(){
    onDeleteTask(id)
  }
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button onClick={deleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
