import React from "react";
/*
  코드 5-18 의사코드로 표현한 리액트의 내부 코드

* POINT1
  - 리액트가 내장하고 있는 useState, useEffect와 같은 훅
* POINT2
  - ⭐️ 각 훅 함수에서는 hooks 배열에 자신이 데이터를 추가
* POINT3
  - 렌더링 과정에서 하나의 컴포넌트를 처리하는 함수
* POINT4
  - hooks를 빈 매열로 초기화
* POINT5
  - 컴포넌트 내부에서 훅을 사용한 만큼 hooks 배열에 데이터가 추가
* POINT6
  - 생성된 배열을 저장하고 hooks 변수를 초기화 한다.
  - 이처럼 사용된 순서를 저장하고 배열에 저장된 수서를 기반으로 훅을 관리
*/
let hooks = null;

export function useHook() {
  //POINT1
  //...
  const hookData = {}; //임의
  useHook.push(hookData); //POINT2
}

//POINT3
function process_a_component_rendering(component) {
  hooks = []; //POINT4
  component(); //POINT5
  let hooksForThisComponent = hooks; //POINT6
  hooks = null; //POINT6
  //...
}

export default function () {
  return (
    <div>
      <p> 코드 5-18 의사코드로 표현한 리액트의 내부 코드</p>
      <p></p>
      <p> * POINT1</p>
      <p> - 리액트가 내장하고 있는 useState, useEffect와 같은 훅</p>
      <p> * POINT2</p>
      <p> - ⭐️ 각 훅 함수에서는 hooks 배열에 자신이 데이터를 추가</p>
      <p> * POINT3</p>
      <p> - 렌더링 과정에서 하나의 컴포넌트를 처리하는 함수</p>
      <p> * POINT4</p>
      <p> - hooks를 빈 매열로 초기화</p>
      <p> * POINT5</p>
      <p> - 컴포넌트 내부에서 훅을 사용한 만큼 hooks 배열에 데이터가 추가</p>
      <p> * POINT6</p>
      <p> - 생성된 배열을 저장하고 hooks 변수를 초기화 한다.</p>
      <p>
        {" "}
        - 이처럼 사용된 순서를 저장하고 배열에 저장된 수서를 기반으로 훅을 관리
      </p>
    </div>
  );
}
