import React from "react";
import Home from "./landing-page/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./landing-page/About";
import Contact from "./landing-page/Contact";
import Todo from "./landing-page/Todo";
import ShoppingCart from "./landing-page/ShoppingCart";

const App=()=>{
  return(
    <div>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/todo" component={Todo}></Route>
        <Route exact path="/shopping_cart" component={ShoppingCart}></Route>
      </Router>
    </div>
  )
}
export default App