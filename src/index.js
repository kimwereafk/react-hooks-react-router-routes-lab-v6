import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter and alias it as Router
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = <Router>{routes}</Router>; // Wrap routes with the Router component

root.render(
  <React.StrictMode>
    <router />
  </React.StrictMode>
);
