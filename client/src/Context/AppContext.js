import React, { useState, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch tasks from the API
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to mark a task as completed
  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  // Function to remove a task
  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Provide the state and functions to the consumers
  return (
    <AppContext.Provider
      value={{
        tasks,
        loading,
        fetchTasks,
        addTask,
        toggleComplete,
        removeTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
