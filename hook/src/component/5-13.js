import React, { useState } from "react";
import { useWindowWidth } from "./5-12";
/*
  코드 5-13 useWindowWidth 훅 사용하기
  * 창너비 조절시 다시 렌더링되어 화면에 나타난다.
  * 커스텀 훅은 리액트의 내장 훅과 같은 방식으로 사용될 수 있다. 
  * 커스텀 훅과 내장 훅을 함께 사용하는 것도 가능
*/

export default function () {
  const width = useWindowWidth();
  const [name, setName] = useState("");
  return (
    <div>
      <div>
        <h1> 설명 </h1>
        <p> * 창너비 조절시 다시 렌더링되어 화면에 나타난다.</p>
        <p> * 커스텀 훅은 리액트의 내장 훅과 같은 방식으로 사용될 수 있다. </p>
        <p> * 커스텀 훅과 내장 훅을 함께 사용하는 것도 가능</p>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        <p>{`name is ${name}`}</p>
        {width < 600 && <br />}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
