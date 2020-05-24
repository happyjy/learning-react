import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Topics from "./Topics";
import Nav from "./Nav";

/*
  * 화면 전환시 "Link, Route" 설정을 해줘야 겠다.
  * Nav 컴포넌트 클릭 시 
    Nav 컴포넌트 > Link component의 to 속성과 같은
    Route 컴포넌트 > path component속성에 해당하는 컴포넌트를 수행
    - 예) about 링크 글릭시 to가 about 이고 Route path에 about을 찾아 해당하는 Route 속성 component에 설정한 컴포넌트로 전환
*/
const BasicExample = (props) => (
  <Router>
    <div>
      <Nav />
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;
