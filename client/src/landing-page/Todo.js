import React from "react";
import Nav from "./Nav";
import { Typography,Box } from "@mui/material";

const Todo = () => {
  return (
    <div>
      <Nav />
      <Box marginTop={14}>
      <Typography variant="h2" component="h1" align="center">
        Create To-Do List
      </Typography>
      </Box>
    </div>
  );
};
export default Todo;
