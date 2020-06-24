import React, { forwardRef, useState, useImperativeHandle } from "react";
/*
  # 코드 5-28 부모 컴포넌트에서 접근 가능한 함수를 구현하기
    * 코드 5-29 부모 컴포넌트에서 호출될 자식 컴포넌트
    * 부모 컴포넌트에서 접근 가능한 함수를 구현 방법
      - useImperativeHandle 훅에 두개 매개변수 지정
        - 첫번째 매개변수
          : type - ref 객체
          : useImperativeHandle 선언한 컴포넌트를 사용할 컴포넌트에서 useRef 훅으로 설정(5-29 참고)한 ref
        - 두번째 매개변수
          : type - function
          : seImperativeHandle 선언한 컴포넌트를 사용할 컴포넌트에서 호출할 함수  
*/

function Profile(props, ref) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <h1> Child Component </h1>
      <div>
        <h2> 설명 </h2>
        <p> # 코드 5-28 부모 컴포넌트에서 접근 가능한 함수를 구현하기</p>
        <p> * 코드 5-29 부모 컴포넌트에서 호출될 자식 컴포넌트</p>
        <p> * 부모 컴포넌트에서 접근 가능한 함수를 구현 방법</p>
        <p>
          {" "}
          <label> -- useImperativeHandle 훅에 두개 매개변수 지정</label>
        </p>
        <p> --- 첫번째 매개변수</p>
        <p> : type - ref 객체</p>
        <p>
          {" "}
          : useImperativeHandle 선언한 컴포넌트를 사용할 컴포넌트에서 useRef
          훅으로 설정(5-29 참고)한 ref
        </p>
        <p> --- 두번째 매개변수</p>
        <p> : type - function</p>
        <p>
          {" "}
          : seImperativeHandle 선언한 컴포넌트를 사용할 컴포넌트에서 호출할 함수
        </p>
      </div>
      <hr></hr>
      <div>
        <h2> 예제 </h2>
        <p>{`name is ${name}`}</p>
        <p>{`age is ${age}`}</p>
      </div>
    </div>
  );
}

export default forwardRef(Profile);
