import React, { useState, useEffect } from "react";
/*
  코드 5-8 useEffect 훅을 이용해서 이벤트 어리 함수를 등록하고 해제하기
  * 브라우저 가로 조절하면 숫자가 바뀐다.

  * POINT1: addEventListener("resize")
    - 창크기가 변경될 때 마다 onResize 함수가 호출
  * POINT2: useEffect 첫번째 매개변수
    - useEffect 첫번째 매개변수에 등록된 함수가 함수를 반환할 수 있다. 
    - 반환된 함수는 컴포넌트가 언마운트 되거나 첫번째 매개변수로 입력된 함수가 호출 되기 직전에 호출된다.        
  * POINT3: useEffect 두번째 매개변수 
    - 빈 배열을 넣으면 컴포넌트가 마운트 될 때만 첫번째 매개변수로 입력된 함수가 호출되고, 컴포넌트가 언마운트 퇼때만 반환된 함수가 호출
    - 클래스형 컴포넌트의 componentDidMount, componentWillUnmount 메서드에서만 실행되는 것과같은 효과가 있다.
*/
export default function () {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize); //POINT1:
    // POINT2:
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []); // POINT3:
  return (
    <div>
      <div>
        <h1> 설명 </h1>
        <p>
          {" "}
          코드 5-8 useEffect 훅을 이용해서 이벤트 어리 함수를 등록하고 해제하기
        </p>
        <p>* 브라우저 가로 조절하면 숫자가 바뀐다.</p>
        <p> </p>
        <p>* POINT1: addEventListener("resize")</p>
        <p>--- 창크기가 변경될 때 마다 onResize 함수가 호출</p>
        <p>* POINT2: useEffect 첫번째 매개변수</p>
        <p>
          {" "}
          --- useEffect 첫번째 매개변수에 등록된 함수가 함수를 반환할 수 있다.{" "}
        </p>
        <p>
          {" "}
          --- 반환된 함수는 컴포넌트가 언마운트 되거나 첫번째 매개변수로 입력된
          함수가 호출 되기 직전에 호출된다.{" "}
        </p>
        <p>* POINT3: useEffect 두번째 매개변수 </p>
        <p>
          {" "}
          --- 빈 배열을 넣으면 컴포넌트가 마운트 될 때만 첫번째 매개변수로
          입력된 함수가 호출되고, 컴포넌트가 언마운트 퇼때만 반환된 함수가 호출
        </p>
        <p>
          {" "}
          --- 클래스형 컴포넌트의 componentDidMount, componentWillUnmount
          메서드에서만 실행되는 것과같은 효과가 있다.
        </p>
      </div>

      <div>
        <h1> 예제 </h1>
        {`width is ${width}`}
      </div>
    </div>
  );
}
