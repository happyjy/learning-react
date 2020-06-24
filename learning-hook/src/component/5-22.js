import React, { useRef, useState, useEffect } from "react";
/*
  코드 5-22 useRef 훅을 이용해서 이전 상탯값 저장하기
  
  * POINT1
    - 이전 상태값 저장하기 위한 용도로 useRef 사용
  * POINT2
    - age값 변경되면 prevAgeRef에 저장.
  * POINT3
    - age의 이전 상탯값을 이용
  * POINT4
    - age가 변경돼서 다시 렌더링 할때 POINT3의 prevAge는 age의 최신 상탯값으로 변경된다.
    - ⭐️ button클릭으로 age 변경 -> POINT3 코드 수행 -> "render완료 되면" useEffect(POINT2수행)으로 useRef로 설정한 prevAgeRef 업데이트
  
  * 이 외에도 setTimeout, setInterval 등의 함수가 반환하는 ID 값 처럼 클래스의 멤버 변수로 저장하던 값을 useRef 훅으로 저장가능

*/

export default function () {
  const [age, setAge] = useState(30);
  //POINT1
  const prevAgeRef = useRef(30);
  //POINT2
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);
  //POINT3
  const prevAge = prevAgeRef.current;
  //POINT3
  const text = age === prevAge ? "same" : age > prevAge ? "older" : "yournger";

  return (
    <div>
      <div>
        <h1> 설명 </h1>

        <p> 코드 5-22 useRef 훅을 이용해서 이전 상탯값 저장하기</p>
        <p> </p>
        <p> * POINT1</p>
        <p> - 이전 상태값 저장하기 위한 용도로 useRef 사용</p>
        <p> * POINT2</p>
        <p> - age값 변경되면 prevAgeRef에 저장.</p>
        <p> * POINT3</p>
        <p> - age의 이전 상탯값을 이용</p>
        <p> * POINT4</p>
        <p>
          {" "}
          - age가 변경돼서 다시 렌더링 할때 POINT3의 prevAge는 age의 최신
          상탯값으로 변경된다.
        </p>
        <p>
          {" "}
          - button클릭으로 age 변경 -> POINT3 코드 수행 -> "render완료 되면"
          useEffect(POINT2수행)으로 useRef로 설정한 prevAgeRef 업데이트
        </p>
        <p> </p>
        <p>
          {" "}
          * ⭐️ 이 외에도 setTimeout, setInterval 등의 함수가 반환하는 ID 값
          처럼 클래스의 멤버 변수로 저장하던 값을 useRef 훅으로 저장가능
        </p>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
        <button
          onClick={() => {
            const age = Math.floor(Math.random() * 50 + 1);
            setAge(age); //POINT4
          }}
        >
          나이변경
        </button>
      </div>
    </div>
  );
}
