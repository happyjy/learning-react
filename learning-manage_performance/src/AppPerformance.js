import React from "react";
// # 4.4 렌더링 속도를 올리기 위한 성능최적화 방법

// ## 4.4.1 생탯값을 불변 객체로 관리하기

// - [x] 코드 4-48 상탯값 내부 배열을 직접 수정하기
// - [x] 코드 4-49 상탯값을 불변 객체로 관리하는 코드
// - [x] 코드 4-50 상탯값을 불변 객체로 관리하는 코드와 그렇지 않은 코드의 실행결과
// - [x] 리액트 컴포넌트의 렌더링과정
// - [x] 코드 4-51 특정 상탯값의 변경 전과 변경 후
// - [x] 코드 4-52 상탯값을 불변객체로 관리했을 때 변경 여부 확인하기
// - [ ] 코드 4-53 JSX문법이 createElement로 변환된 코드

// ## 4.4.2 렌더 함수에서 새로운 객체 만들지 않기

// - [x] 코드 4-54 렌더 함수에서 새로운 객체를 만들어서 자식 컴포넌트의 속성값으로 전달하기

// ## 4.4.3 메모이제이션(memoization) 이용하기

// - [x] 코드 4-55 메모이제이션 사용예
// - [x] 코드 4-56 메모이제이션의 잘못된 사용예

// ## 4.4.4 성능 최적화를 위한 도구들 이용하기

import MyComponent from "./component/performance/04-48-50";
// import MyComponent from "./component/performance/04-51";
// import MyComponent from "./component/performance/04-52";
// import MyComponent from "./component/performance/04-53";
// import MyComponent from "./component/performance/04-54";
// import MyComponent from './component/performance/04-55';
// import MyComponent from "./component/performance/04-56";

class AppLifeCycle extends React.Component {
  // constructor(props) {
  // 	super(props);
  // }
  state = {
    name: "jyoon",
    age: "30",
    date: "20200524",
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.speedUp}>speedUp</button>
				<button onClick={this.speedDown}>speedDown</button>
        <MyComponent speed={this.state.speed} /> */}

        <MyComponent {...this.state} />

        {/* <ProductEdit product={this.state.product} />
				<button onClick={this.changePrice}>Change Price</button> */}
      </div>
    );
  }
}

export default AppLifeCycle;
