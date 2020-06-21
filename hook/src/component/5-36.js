import React, { useState, useEffect, useRef } from "react";
import usePrevious from "./customHook/usePrevious";

/*
  # 코드 5-36 componentDidUpdate 메서드를 훅으로 변환하기
  > userIdd가 변경된 경우 name 상탯값을 새로운 사용자 이름으로 변경
    
    * POINT1. userPrevious 훅을 이용해서 이전 userId를 저장
    * POINT2. 마운트 여부를 useRef훅으로 관리
    * POINT3. userIdd가 변경된 경우 name 상탯값을 새로운 사용자 이름으로 변경
*/

//props = {id name, age, date}
export default function ({ id, name, age, date }) {
  const [userName, setUserName] = useState(name);
  const [userId, setUserId] = useState(id);
  //POINT1
  const prevUserId = usePrevious(userId);
  //POINT2
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (isMountedRef.current) {
      debugger;
      //POINT3
      // if (prevUserId !== id) {
      if (prevUserId !== userId) {
        setUserName(userName);
      }
    } else {
      isMountedRef.current = true;
    }
  });
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
