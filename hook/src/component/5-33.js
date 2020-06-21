import React, { useState, useEffect } from "react";
import useOnFirstRender from "./5-33_1";
/*
  # 코드 5-33 useOnFirstRender 커스텀 훅
    * useOnFirstRender 커스텀 훅 사용 부 
 */

function callApi() {
  console.log("### Api function");
}

function Profile({ firstName, lastName }) {
  const [name, setName] = useState(`${firstName} ${lastName}`);
  useOnFirstRender(callApi);
  return (
    <div>
      <div>
        <h1> 설명 </h1>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        this is my fullName: {name}
      </div>
    </div>
  );
}

export default function () {
  return (
    <div>
      <Profile firstName="jaeYoon" lastName="Yoon"></Profile>
    </div>
  );
}
