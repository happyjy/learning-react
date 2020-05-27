import React from "react";
/*
  코드 4-53 JSX문법이 createElement로 변환된 코드(Parent, Parent1)
  * createElement로 변환된 코드를 보면 렌더링할 때마다 새로운 속성값 객체가 생성된다.
  * 객체의 내부 속성값이 변경되지 않아도 최상위 객체의 레퍼런스는 항상 변경된다.
  * 따라서 리액트는 소것ㅇ값의 최상위 객체에 직접 연결(1-depth)된 모든 값을 단순 비교한다.
  * 상탯값도 실제값은 변경되지 않더라도 여러 번 setState 메서드가 호출되면서 최상위 객체의 레퍼런스만 변경될 수 있다.
  * 따라서 속성값과 마찬가지로 최상위 객체에 직접 연결 된  모든 값을 단순 비교한다.
*/

function Child() {
  return <div>123</div>;
}

function Parent() {
  return <Child name="mike" age={23}></Child>;
}

function Parent1() {
  return React.createElement(Child, { name: "mike", age: 23 });
}

class MyComponent extends React.Component {
  render() {
    return <div> memoize </div>;
  }
}

export default MyComponent;
