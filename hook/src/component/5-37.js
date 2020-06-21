import React, { useState, useEffect, useRef } from "react";
import usePrevious from "./customHook/usePrevious";
import useOnUpdate from "./customHook/useOnUpdate";
/*
  # 코드 5-37 useOnUpdate 커스텀 훅

*/

export default function ({ id, name, age, date }) {
  const [userName, setUserName] = useState(name);
  const [userId, setUserId] = useState(id);
  const prevUserId = usePrevious(userId);

  const func = () => {
    if (prevUserId !== userId) {
      setUserName(userName);
    }
  };

  //custom Hook
  useOnUpdate(func);

  const onClick = () => {
    setUserName("otherJyoon");
    setUserId("okwoyjy");
  };
  return (
    <div>
      <div>
        <h1> 설명 </h1>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        {`this is current userName: ${userName}`}
        <br></br>
        <button onClick={onClick}>버튼으로 componentDidupdate 테스트 </button>
      </div>
    </div>
  );
}
