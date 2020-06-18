import React, { useState, useEffect } from "react";
import egList from "./egList.js";
import "./AppHook.scss";
import "./component/5-01";
// # HOOK
// 코드 5-1 useState 훅 사용하기
// 코드 5-2 클래스형 컴포넌트에서 상태값 관리하기
// 코드 5-3 여러 개의 useState 훅사용하기
// 코드 5-4 하나의 useState 훅으로 여러 상탯값 관리하기
// 코드 5-5 useEffect 훅의 사용예
// 코드 5-6 useEffect 훅에서 API 호출하기
// 코드 5-7 클래스형 컴포넌트에서 API 호출하기
// 코드 5-8 useEffect 훅을 이용해서 이벤트 어리 함수를 등록하고 해제하기
// 코드 5-9 이벤트 처리 함수의 등록과 해제를 클래스형 컴포넌트로 작성하기
// 코드 5-10 훅을 사용하면 로직별로 코드를 모을 수 있다.
// 코드 5-11 클래스형 컴포넌트에서는 로직이 분산된다.
// 코드 5-12 useWindowWidth 커스텀 훅
// 코드 5-13 useWindowWidth 훅 사용하기
// 코드 5-14 useHasMounted 커스텀 훅
// 코드 5-15 widthHasMounted 코차 컴포넌트
// 코드 5-16 훅 사용 시 규칙1을 위한반 경우
// 코드 5-17 여러 개의 훅 사용하기
// 코드 5-18 의사코드로 표현한 리액트의 내부 코드
// 코드 5-19 훅을 사용하지 않고 콘텍스트 API를 사용하기
// 코드 5-20 useContext 훅 사용하기
// 코드 5-21 useRef 훅 사용하기
// 코드 5-22 useRef 훅을 이용해서 이전 상탯값 저장하기
// 코드 5-23 useMemo 훅의 사용 예
// 코드 5-24 useCallback 훅이 필요한 예
// 코드 5-25 useCallback 훅 사용하기
// 코드 5-26 useReducer 훅의 사용 예
// 코드 5-27 useReducer 훅과 콘텍스트 API를 이용해서 이벤트 처리 함수를 전달하기
// 코드 5-28 부모 컴포넌트에서 접근 가능한 함수를 구현하기
// 코드 5-29 부모 컴포넌트에서 자식 컴포넌트 함수 호출하기
// 코드 5-30 useDebugValue 훅을 사용하는 코드
// 코드 5-31 훅으로 변환할 constructor 메서드
// 코드 5-32 constructor 메서드를 훅으로 구현하기
// 코드 5-33 useOnFirstRender 커스텀 훅
// 코드 5-34 usePrevious 커스텀 훅
// 코드 5-35 훅으로 변환한 componentDidUpdate 메서드
// 코드 5-36 componentDidUpdate 메서드를 훅으로 변환하기
// 코드 5-37 useonupdate 커스텀 훅
// 코드 5-38 훅으로 변경할 getDerivedStateFromProps 정적 메서드
// 코드 5-39 getDerivedStateFromProps 정적 메서드를 훅으로 변경하기
// 코드 5-40 useReducer 훅을 이용해서 forceUpdate 메서드를 구현하기
// 코드 5-41 디바운스 기능을 제공하는 useDebounce 훅의 구현 및 사용
// 코드 5-42 useDebounce 훅의 래퍼 컴포넌트
// 코드 5-43 클래스형 컴포넌트에서 Debounce 컴포넌트를 사용하기
// 코드 5-44 useHasMounted 훅의 기능을 제공하기 위해 구현한 고차 컴포넌트와 렌더 속성값
// 코드 5-45 클래스형 컴포넌트에서 widthHasMounted 고차 컴포넌트 사용하기

function App() {
  const examples = egList;

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
    import(`./component/${examples[currentIndex].codeNumber}.js`).then(
      (module) => {
        // console.log("### module: ", module);
        //module.default: import 객체
        setComponent({ comp: module.default });
      },
    );
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

export default App;
