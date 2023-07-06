import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <>
      <AppBar component="nav">
        <Toolbar className="centered-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/todo">Create To-Do</Link>
          <Link to="/shopping_cart">Shopping Cart</Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Nav;
