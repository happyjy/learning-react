import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./AppHook";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AppLifeCycle />, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root"),
);
