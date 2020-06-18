import React, { useState, useEffect } from "react";

/*
  코드 5-12 useWindowWidth 커스텀 훅
  * 코드 5-13을 만들기 위한 useWindowWidth 커스텀 훅
  * POINT1
    - useState, useEffect훅을 이용해서 커스텀 훅을 만들었다. 
    - 이렇게 레고 블록처럼 기존 훅을 이용해서 새로운 훅을 만들 수 있다는 점이 훅의 배력이다.
  * POINT2
    - 창의 너비를 저장해서 제공하는 것이 useWindowWidth 훅의 역할
  
  
*/
export default () => {
  return (
    <div>
      <h1> 설명 </h1>
      <p>* 코드 5-13을 만들기 위한 useWindowWidth 커스텀 훅</p>
      <p> * POINT1</p>
      <p> - useState, useEffect훅을 이용해서 커스텀 훅을 만들었다. </p>
      <p>
        {" "}
        - 이렇게 레고 블록처럼 기존 훅을 이용해서 새로운 훅을 만들 수 있다는
        점이 훅의 배력이다.
      </p>
      <p> * POINT2</p>
      <p> - 창의 너비를 저장해서 제공하는 것이 useWindowWidth 훅의 역할</p>
    </div>
  );
};
export function useWindowWidth() {
  const [width, setWidth] = useState("");
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return width;
}
