import React from "react";
import Home from "./landing-page/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./landing-page/About";
import Contact from "./landing-page/Contact";

const App=()=>{
  return(
    <div>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Router>
    </div>
  )
}
export default App