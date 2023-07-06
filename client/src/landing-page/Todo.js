import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Typography, Box, TextField, Button, Checkbox,Pagination ,Stack, IconButton} from "@mui/material";
import { AppContext } from "../Context/AppContext";
import DeleteIcon from '@mui/icons-material/Delete';


const Todo = () => {
  const { tasks,fetchTasks, addTask, toggleComplete, removeTask } = useContext(AppContext);
  const [newTask, setNewTask] = useState("");
  const [page, setPage] = useState(1);
  const tasksPerPage = 10;
  const totalPages = Math.ceil(tasks.length / tasksPerPage);
  const startIndex = (page - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = () => {
    // Add the new task to the context state
    addTask({ title: newTask, completed: false });
    setNewTask("");
  };

  const handleToggleComplete = (taskId) => {
    // Toggle the completion status of the task
    toggleComplete(taskId);
  };

  const handleRemoveTask = (taskId) => {
    // Remove the task from the context state
    removeTask(taskId);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  return (
    <div>
      <Nav />
      <Box marginTop={14} display="flex" justifyContent="center" alignItems="center">
        <Box>
        <Typography variant="h2" component="h1" align="center">
          Create To-Do List
        </Typography>
        <TextField
          label="Enter Your Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          fullWidth
          sx={{ my: 2 }}
        />
        <Button variant="contained" onClick={handleAddTask}>
          Add Task
        </Button>
        <Typography variant="body1" align="center">
          Total Tasks: {tasks.length}
        </Typography>
        <Typography variant="body1" align="center" pb={4}>
          Completed Tasks: {tasks.filter((task) => task.completed).length}
        </Typography>
        <Stack spacing={1}>
        {tasks.slice(startIndex, endIndex).map((task) => (
          <Box key={task.id} display="flex" alignItems="center">
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              color="secondary"
            />
            <Typography variant="body1" sx={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title}
            </Typography>
          <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveTask(task.id)}>
              <DeleteIcon color="secondary"/>
          </IconButton>
          </Box>
        ))}
        </Stack>
        {/* Pagination */}
        <Box mt={3} display="flex" justifyContent="center" >
          <Pagination count={totalPages} page={page} onChange={handleChangePage} color="primary"/>
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Todo;
