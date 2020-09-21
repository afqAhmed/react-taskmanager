import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React.js" },
    { id: 2, title: "Learn React Hooks" },
    { id: 3, title: "Learn Redux.js" },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, {id: uuidv4(), title}])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;