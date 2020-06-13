import React, { useState, useEffect } from "react";
import "./AppManageComponent.scss";
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
// import MyComponent from './component/ManageComponent/04-46';

function App() {
  const examples = [
    {
      codeNumber: "04-31",
      title: "마운트 시 서버로 이벤트를 보내는 고차 컴포넌트",
    },
    { codeNumber: "04-32", title: "마운트 여부를 알려주는 고차 컴포넌트" },
    {
      codeNumber: "04-33",
      title: "로그인 여부에 따라 다르게 보여 주는 고차 컴포넌트",
    },
    { codeNumber: "04-34", title: "클래스 상속을 이용한 고차 컴포넌트" },
    { codeNumber: "04-35", title: "디버깅에 사용되는 고차 컴포넌트" },
    { codeNumber: "04-36", title: "div요소로 감싸 주는 고차 컴포넌트" },
    { codeNumber: "04-37", title: "여러 개의 고차 컴포넌트를 동시에 사용하기" },
    { codeNumber: "04-38", title: "고차 컴포넌트에서 displayName 설정하기" },
    { codeNumber: "04-39", title: "고차 컴포넌트에서 정적 메서드 전달하기" },
    { codeNumber: "04-40", title: "withRouter 고차 컴포넌트" },
    {
      codeNumber: "04-40(withRouter)/04-40(withRouterExample)",
      title: "withRouterExample",
    },
    {
      codeNumber: "04-40(Router)/04-40(RouterExample)",
      title: "RouterExample",
    },
    {
      codeNumber: "04-41",
      title: "마운트 시 서버로 이벤트를 보내는 렌더 속성값",
    },
    { codeNumber: "04-42", title: "children을 사용하지 않은 렌더 속성값" },
    {
      codeNumber: "04-43",
      title: "데이터 처리 로직을 렌더 속성값으로 구현하기",
    },
    {
      codeNumber: "04-44",
      title: "마우스의 위치 정보를 알려 주는 렌더 속성값",
    },
    {
      codeNumber: "04-45",
      title: "렌더 속성값 함수의 매개변수를 속성값으로 전달하는 방법",
    },
    {
      codeNumber: "04-46",
      title: "children 속성값을 이용해서 작성한 레이아웃 컴포넌트",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [Component, setComponent] = useState({});

  const moveFirtst = () => moveExample(0);
  const movePrevious = () => moveExample(currentIndex - 1);
  const moveNext = () => moveExample(currentIndex + 1);
  const moveLast = () => moveExample(examples.length - 1);
  const moveExample = (index) => {
    debugger;
    if (typeof index !== "number") {
      index = index.target.dataset.index;
    }
    setCurrentIndex(Math.max(Math.min(index, examples.length - 1), 0));
  };

  useEffect(() => {
    import(
      `./component/ManageComponent/${examples[currentIndex].codeNumber}`
    ).then((module) => {
      // console.log("### module: ", module);
      //module.default: import 객체
      setComponent({ comp: module.default });
    });
  }, [currentIndex]);

  // console.log(examples);

  //# test value
  //  - 예제 04-35에서 사용
  const state = {
    name: "jyoon",
    age: "30",
    date: "20200524",
  };
  return (
    <div className="container">
      <div className="subContainerLeft">
        <ul className="examples">
          {examples &&
            examples.map((v, i) => (
              <li
                key={i}
                className="example"
                onClick={moveExample}
                data-index={i}
              >
                {v.codeNumber}
                <br></br> {v.title}
              </li>
            ))}
        </ul>
      </div>
      <div className="subContainerRight">
        <div className="itemMove">
          <ul className="buttonContainer">
            <li className="buttonItem" onClick={moveFirtst}>
              first
            </li>
            <li className="buttonItem" onClick={movePrevious}>
              previous
            </li>
            <li className="buttonItem" onClick={moveNext}>
              next
            </li>
            <li className="buttonItem" onClick={moveLast}>
              last
            </li>
          </ul>
        </div>
        <hr></hr>
        <div className="component">
          {Component.comp && <Component.comp {...state} />}
        </div>
      </div>
    </div>
  );
}
// class App extends React.Component {
// 	// constructor(props) {
// 	// 	super(props);
// 	// }
// 	state = {
// 		name: 'jyoon',
// 		age: '30',
// 		date: '20200524'
// 	};
// 	render() {
// 		return (
// 			<div>
// 				{/* <button onClick={this.speedUp}>speedUp</button>
// 				<button onClick={this.speedDown}>speedDown</button>
//         <MyComponent speed={this.state.speed} /> */}

// 				<MyComponent {...this.state} />

// 				{/* <ProductEdit product={this.state.product} />
// 				<button onClick={this.changePrice}>Change Price</button> */}
// 			</div>
// 		);
// 	}
// }

export default App;
