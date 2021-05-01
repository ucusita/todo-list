import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Menu from './components/menu/Menu';
render(
  <Router>
    <Menu />,
    <App />
  </Router>,
document.getElementById("root"));
