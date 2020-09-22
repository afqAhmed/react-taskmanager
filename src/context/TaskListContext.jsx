import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: uuidv4(), title }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
