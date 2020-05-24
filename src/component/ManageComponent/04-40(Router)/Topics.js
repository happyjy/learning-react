import React from "react";
import { Link, Route } from "react-router-dom";

const Topic = ({ match, location }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <li>{`match prop -> ${JSON.stringify(match)}`}</li>
    <li>{`location prop -> ${JSON.stringify(location)}`}</li>
  </div>
);

const Topics = ({ match, location, history }) => (
  <div>
    <h2>Topics</h2>
    <li>{`match prop -> ${JSON.stringify(match)}`}</li>
    <li>{`location prop -> ${JSON.stringify(location)}`}</li>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        a<Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default Topics;
