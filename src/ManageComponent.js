import React from "react";
// ##  4.3.1 고차 컴포넌트를 이용한 공통 기능 관리
// - [x] 코드 4-31 마운트 시 서버로 이벤트를 보내는 고차 컴포넌트
// - [x] 코드 4-32 마운트 여부를 알려주는 고차 컴포넌트
// - [x] 코드 4-33 로그인 여부에 따라 다르게 보여 주는 고차 컴포넌트
// - [x] 코드 4-34 클래스 상속을 이용한 고차 컴포넌트
// - [x] 코드 4-35 디버깅에 사용되는 고차 컴포넌트
//      [?] React.Fragment에 대해서
// - [x] 코드 4-36 div요소로 감싸 주는 고차 컴포넌트
// - [x] 코드 4-37 여러 개의 고차 컴포넌트를 동시에 사용하기
// - [x] 코드 4-38 고차 컴포넌트에서 displayName 설정하기
// - [?] 코드 4-39 고차 컴포넌트에서 정적 메서드 전달하기
//      [?] InputComponent클래스의 static 함수가 호출 되지 않는다..
// - [?] 코드 4-40 withRouter 고차 컴포넌트
//      - 04-40(withRouter)/04-40(withRouterExample)"
//        예제로 고차 컴포넌트 단점(개발자고 모르는 고차 컴포넌트에서 넘겨주는 props확인해보자)
// - [x] 고차 컴포넌트 단점
//      - 04-40(withRouterExample).js 파일 참고
//      - 개발자가 모르는 속성값이 암묵적으로 넘어 온다.

// ## 4.3.2 렌더 속성값을 이용한 공통 기능 관리
// - [x] 코드 4-41 마운트 시 서버로 이벤트를 보내는 렌더 속성값
// - [x] 코드 4-42 children을 사용하지 않은 렌더 속성값
// - [x] 코드 4-43 데이터 처리 로직을 렌더 속성값으로 구현하기
// - [x] 코드 4-44 마우스의 위치 정보를 알려 주는 렌더 속성값
// - [x] 코드 4-45 렌더 속성값 함수의 매개변수를 속성값으로 전달하는 방법
// - [x] 코드 4-46 children 속성값을 이용해서 작성한 레이아웃 컴포넌트

// import MyComponent from './component/ManageComponent/04-31';
// import MyComponent from './component/ManageComponent/04-32';
// import MyComponent from './component/ManageComponent/04-33';
// import MyComponent from './component/ManageComponent/04-34';
// import MyComponent from './component/ManageComponent/04-35';
// import MyComponent from './component/ManageComponent/04-36';
// import MyComponent from './component/ManageComponent/04-37';
// import MyComponent from './component/ManageComponent/04-38';
// import MyComponent from "./component/ManageComponent/04-39";
// import MyComponent from "./component/ManageComponent/04-40";
// import MyComponent from "./component/ManageComponent/04-40(withRouter)/04-40(withRouterExample)";
// import MyComponent from "./component/ManageComponent/04-40(Router)/04-40(RouterExample)";

// import MyComponent from "./component/ManageComponent/04-41";
// import MyComponent from "./component/ManageComponent/04-42";
// import MyComponent from "./component/ManageComponent/04-43";
// import MyComponent from "./component/ManageComponent/04-44";
// import MyComponent from "./component/ManageComponent/04-45";
import MyComponent from "./component/ManageComponent/04-46";

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
