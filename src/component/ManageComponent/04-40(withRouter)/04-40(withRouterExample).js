import React from "react";
import { Link, Route, withRouter } from "react-router-dom";

// withRouter가 고차컴포넌트로 props에 history, location, match를 넘긴다.
// 이렇게 고차 컴포넌트의 단점으로 사용자가 모르는 속성값이 암묵적으로 넘어 온다.
const MyButton = withRouter((props) => {
  console.log(
    "### MyButton 컴포넌트 > withRouter를 사용한 고차 컴포넌트로 props를 확인해보자 : ",
    { props },
  );
  return (
    <button onClick={() => props.history.push(props.path)}>{props.text}</button>
  );
});

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <MyButton text="Link 없이 about 링크로 이동" path="/about" />

      {/* render에 import한 compnent로 쓰임 */}
      <Route exact path="/" render={() => <h2>Home</h2>} />
      <Route path="/about" render={() => <h2>About</h2>} />
    </div>
  );
};

export default App;
