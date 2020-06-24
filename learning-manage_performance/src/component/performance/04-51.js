import React from "react";
/*
  코드 4-51 특정 상탯값의 변경 전과 변경 후
  코드 4-52 상탯값을 불변객체로 관리했을 때 변경 여부 확인하기
        * shouldComponentUpdate는 별도로 구현하지 않으면 기본값 참을 반환한다.
중요 =>  * 즉, 송성값이나 상탯값이 변경되지 안아도 부모 컴포넌트가 렌더링 될때마다 자식 컴포넌트도 렌더링된다.
        * 이 메서드가 항상 참을 반환해도 석성값이나 상탯값이 변경되지 않으면 실제 돔도 변경되지 않기 때문에 크게 문제 되지 않는다. 
POINT=> * 하지만 렌더링 성능이 중요한 상황에서는 shouldComponentUpdate 메서드를 직접 구현해서 가상 돔의     계산도 생략 할 수 있다. 

  * 상탯값을 불변 객체로 관리했다면 this.state에 직접 연결된 데이터만 단순 비교하면 컴포넌트의 상탯값이 변경되었는지 알 수 있다. 
  * 속성값도 마찬가지 방식으로 변경 여부를 판단할 수 있다. 
  * 이런 방식으로 석성값과 상탯값이 변경됐는지 판단하는 로직으로 shouldCommponentUpdate생명주기 메서드가 구현된 게 바로 리액트에서 제공하는 PureComponent 컴포넌트와 React.memo함수다.
*/

const prevState = {
  todos: [
    { title: "fixbug", priority: "high" },
    { title: "fixbug1", priority: "high1" },
  ],
};
const nextState = (prevState.todos[1].priority = "123");
// const nextState = {
//   todos: [
//     { title: "fixbug", priority: "high" },
//     { title: "fixbug1", priority: "low" },
//   ],
// };

console.log(prevState.todos !== nextState.todos);
class MyComponent extends React.Component {
  render() {
    return <div> shouldComponentUpdate </div>;
  }
}

export default MyComponent;
