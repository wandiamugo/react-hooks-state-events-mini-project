import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const filterCategory = (category) => {
    if(category === "All") {
      return setTasks(TASKS);
    }
    const newTasks = TASKS.filter((task) => task.category === category);
    setTasks(newTasks);
  };

  function handleDelete(id) {
    setTasks((tasks) => {
      return tasks.filter((task, index) => index !== id)
    })
  }

  function addNewTask(task) {
    setTasks((tasks) => [...tasks, task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryFilter={filterCategory} categories={"CATEGORIES"}/>
      <NewTaskForm onTaskFormSubmit={addNewTask} categories={"CATEGORIES"}/>
      <TaskList tasks={tasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
