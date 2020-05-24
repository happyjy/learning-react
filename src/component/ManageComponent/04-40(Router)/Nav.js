import React from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = (props) => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
    <li>{`match prop -> ${JSON.stringify(props.match)}`}</li>
    <li>{`location prop -> ${JSON.stringify(props.location)}`}</li>
  </ul>
);

export default withRouter(Nav);
